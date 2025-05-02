
import { motion } from "framer-motion";

const photos = [
  {
    id: 1,
    url: "https://cdn.poehali.dev/files/eb756938-872d-4bba-8cf0-54e3a6fcfac5.jpg",
    alt: "Александр делает предложение Анне"
  },
  {
    id: 2,
    url: "https://cdn.poehali.dev/files/e6330127-80f7-4feb-8958-566b6c7b15dc.jpg",
    alt: "Александр и Анна"
  },
  {
    id: 3,
    url: "https://cdn.poehali.dev/files/6e6c254f-c050-458d-a8b6-8eb3de6dcec0.jpg",
    alt: "Александр и Анна лежат на полу"
  }
];

const PhotoGallery = () => {
  return (
    <motion.section 
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-cormorant text-3xl md:text-4xl text-center text-gray-800 mb-12">Наша история</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div 
              key={photo.id}
              className="overflow-hidden rounded-lg shadow-lg h-80 md:h-96"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index + 0.3 }}
            >
              <img 
                src={photo.url} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PhotoGallery;
