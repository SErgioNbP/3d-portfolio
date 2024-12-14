import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Vector3 } from "three";
import HomeInfo from "./HomeInfo";
import Loader from "./Loader";
import Sky from "../models/Sky";
import Camping from "../models/Camping";
import instructions from '../assets/instructions.gif';

const HomeCanvas = () => {
  const [hideInstructions, setHideInstructions] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const lastMouseX = useRef(0);
  const cameraRef = useRef();

  const campingPosition = new Vector3(0, 0, 0);

  const handlePointerDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    lastMouseX.current = e.clientX;

    setTimeout(() => {
      setHideInstructions(true);
    }, 500);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const adjustCampingSceneForScreenSize = () => {
    let screenScale;

    if (window.innerWidth < 768) {
      screenScale = [2, 2, 2];
    } else {
      screenScale = [4, 4, 4];
    }

    return screenScale;
  };

  const campingScale = adjustCampingSceneForScreenSize();

  return (
    <section
      className="w-full h-screen relative"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {!hideInstructions && (
        <div
          id="instructions"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10"
        >
          <img
          
            src={instructions}
            alt="Swipe instructions"
            className="w-6 mx-auto mb-2 opacity-85"
          />
          <div className="flex items-center">
            <p className="text-white">Drag to Discover</p>
          </div>
        </div>
      )}
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ position: [10, 2, 0], near: 0.1, far: 1000, fov: 40 }}
        onCreated={({ camera }) => (cameraRef.current = camera)}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000" intensity={1} />
        <Suspense fallback={<Loader />}>
          <Sky />
          <Camping
            position={campingPosition}
            scale={campingScale}
            rotation={[0, 2, 0]}
            isRotating={isDragging}
            setIsRotating={setIsDragging}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default HomeCanvas;