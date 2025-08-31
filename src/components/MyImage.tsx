const MyImage = () => {
  return (
    <div className="flex items-center justify-center mt-28 md:mr-3 lg:mr-10">
      <img
        rel="preload"
        src="Me.webp"
        width={384}
        height={384}
        className="float rounded-full object-cover sm:w-72 sm:h-72 lg:w-96 lg:h-96"
        fetchPriority="high"
        alt="me"
      ></img>
    </div>
  );
};

export default MyImage;
