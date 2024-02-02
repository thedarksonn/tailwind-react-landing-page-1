const BurgerCard = ({ imgUrl, changeBigBurgerImage, bigBurgerImg }) => {
  const handleClick = () => {
    if (bigBurgerImg !== imgUrl.bigBurger) {
      changeBigBurgerImage(imgUrl.bigBurger);
    }
  };
  return (
    <>
      <div
        className={`border-2 rouned-xl 
      ${
        bigBurgerImg === imgUrl.bigBurger
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1
      `}
        onClick={handleClick}
      >
        <div
          className="flex justify-center items-center bg-card bg-center 
        bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4"
        >
          <img
            src={imgUrl.thumbnail}
            alt=" "
            width={127}
            height={103}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default BurgerCard;
