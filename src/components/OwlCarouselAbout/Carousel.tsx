'use client';

import { motion } from 'framer-motion';

const items = [
  '/images/logo/logo-pixel.png',
  '/images/logo/logo-piper.png',
  '/images/logo/logo-photobin.png',
  '/images/logo/logo-buiten.png',
  '/images/logo/logo-klin.png',
];

const Carousel = () => {
  return (
    <div className="overflow-hidden w-full py-10">
      <motion.div
        className="flex items-center space-x-16"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'linear',
        }}
        style={{ width: 'max-content' }} // Pastikan elemen cukup panjang untuk seamless looping
      >
        {/* Duplikasi array cukup panjang untuk looping seamless */}
        {[...items, ...items, ...items].map((src, index) => (
          <div key={index} className="w-[220px] h-[150px] flex items-center justify-center flex-shrink-0">
            <img src={src} alt={`Partner ${index + 1}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
