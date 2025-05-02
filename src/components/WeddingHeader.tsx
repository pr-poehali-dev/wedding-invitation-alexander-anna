
const WeddingHeader = () => {
  return (
    <header className="relative w-full py-16 md:py-24 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-cormorant text-xl md:text-2xl font-light text-gray-500 mb-4">Мы приглашаем вас на свадьбу</h2>
        <h1 className="font-cormorant text-5xl md:text-7xl font-light text-gray-800 mb-6">
          Александр & Анна
        </h1>
        <div className="w-20 h-0.5 bg-pink-200 mx-auto my-6"></div>
        <p className="font-montserrat text-lg md:text-xl text-gray-600">
          19 июля 2025
        </p>
      </div>
    </header>
  );
};

export default WeddingHeader;
