import { photographyCollections } from '../constants';
import { Link } from 'react-router-dom';
import CTA from "../components/CTA";

const PhotoGallery = () => {
  // TODO: Change photos and create page to each collection
  const collections = photographyCollections.map((collection, index) =>
    collection = {
      id: `${collection.name}-${index}`,
      name: collection.name,
      description: collection.description,
      firstImage: collection.images[0],
      link: collection.link,
    }
  );

  return (
    <div className="px-8 lg:px-[14rem] py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Photo Gallery</h2>

      <div className="custom-grid-layout">
        {collections.map((collection, index) => (
          <div key={collection.id} className={`mt-8 gallery-item gallery-item-${index + 1}`}>
            <Link to={collection.link}>
              <img
                src={collection.firstImage}
                alt={collection.name}
                className="w-full h-full object-cover"
              />
            </Link>
            <p className="text-center mt-2 text-slate-300">{collection.name}</p>
          </div>
        ))}
      </div>
      <hr className='border-slate-200 mb-8 mt-28' />
      <CTA />
    </div>
  );
};

export default PhotoGallery;