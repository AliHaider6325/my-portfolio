const MyImage = () => {
  return (
    <div className="flex items-center justify-center mt-28 md:mr-3 lg:mr-10">
      <img
        src="Me.webp"
        className="float w-52 h-52 rounded-full object-cover sm:w-72 sm:h-72 lg:w-96 lg:h-96"
        fetchPriority="high"
      ></img>
    </div>
  );
};

export default MyImage;
