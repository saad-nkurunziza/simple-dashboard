const Sponsors = () => {
  const images = [
    {
      image: "/binance.png",
    },
    {
      image: "/airbnb.png",
    },
    {
      image: "/dropbox.png",
    },
    {
      image: "/coinbase.png",
    },
  ];
  return (
    <div
      id="sponsors"
      className="flex justify-center items-center mt-20 mb-12 mx-14 overflow-x-auto"
    >
      {images.map(({ image }) => (
        <div
          key={image}
          className={`flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img
            src={image}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
