const galleryImages = [
  "/images/logo/logo-buiten.png",
  "/images/logo/logo-buiten.png",
  "/images/logo/logo-buiten.png",
  "/images/logo/logo-buiten.png",
  "/images/logo/logo-buiten.png",
  "/images/logo/logo-buiten.png",
  "/images/logo/logo-buiten.png",
  "/images/logo/logo-buiten.png",
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-2xl border border-gray-200 p-3"
        >
          <div className="bg-gray-100 rounded-xl p-2">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-contain rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
