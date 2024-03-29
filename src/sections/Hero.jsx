import BurgerCard from "../Components/BurgerCard";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { bigBurger1 } from "../assets/images";
import { burgers, statistics } from "../constants";

import { useState } from "react";

const Hero = () => {
  const [bigBurgerImg, setbigBurgerImg] = useState(bigBurger1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Lorem, ipsum dolor.
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Lorem, ipsum dolor.
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Straw</span> Hat
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          incidunt provident?
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative flex-1 flex justify-center items-cente xl:min-h-screen max-xl:py-40 
      bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigBurgerImg}
          alt=""
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {burgers.map((burger, index) => (
            <div key={index}>
              <BurgerCard
                imgUrl={burger}
                changeBigBurgerImage={(burger) => {
                  setbigBurgerImg(burger);
                }}
                bigBurgerImg={bigBurgerImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
