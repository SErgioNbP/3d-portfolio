import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { photographyCollections } from '../constants';
import CTA from "../components/CTA";
import PhotoGallery from '../components/PhotoGallery';

const PhotographyGallery = () => {
  //TODO: Implement swipe gestures for mobile devices
  //TODO: make changes in the slider with new slider collection
  const [activeCollection, setActiveCollection] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const currentCollection = photographyCollections[activeCollection];

  const handleNextCollection = () => {
    setActiveCollection((prev) =>
      (prev + 1) % photographyCollections.length
    );
    setActiveImage(0);
  };

  const handlePrevCollection = () => {
    setActiveCollection((prev) =>
      prev === 0 ? photographyCollections.length - 1 : prev - 1
    );
    setActiveImage(0);
  };

  const handleNextImage = () => {
    setActiveImage((prev) =>
      (prev + 1) % currentCollection.images.length
    );
  };

  const handlePrevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? currentCollection.images.length - 1 : prev - 1
    );
  };

  return (
    <section className='relative'>
      {/* Full-width Image Slider */}
      <div className='relative w-full h-[99vh] overflow-hidden'>
        <img
          src={currentCollection.images[activeImage]}
          alt={`${currentCollection.name} - Image ${activeImage + 1}`}
          className='absolute top-0 left-0 w-full h-full object-cover'
          // Add srcSet for responsive images
          srcSet={`
            ${currentCollection.images[activeImage]} 1x,
            ${currentCollection.images[activeImage]} 2x
          `}
        />

        <button
          onClick={handlePrevImage}
          className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 rounded-full p-2'
        >
          <ChevronLeft color="white" />
        </button>

        <button
          onClick={handleNextImage}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 rounded-full p-2'
        >
          <ChevronRight color="white" />
        </button>
      </div>

      {/* Overlay Text */}
      {/* <div className='flex justify-center items-center'>
        <div className='px-4 py-4 text-center'>
          <h1 className='text-3xl font-bold mb-3'>
            {currentCollection.name}
          </h1>
          <p className='text-l max-w-2xl mx-auto'>
            {currentCollection.description}
          </p>

          <div className='mt-3 flex justify-center items-center gap-4'>
            <button
              onClick={handlePrevCollection}
              className='hover:text-blue-200'
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={handleNextCollection}
              className='hover:text-blue-200'
            >
              <ChevronRight size={36} />
            </button>
          </div>
        </div>
      </div> */}

      <PhotoGallery />
    </section>
  );
};

export default PhotographyGallery;