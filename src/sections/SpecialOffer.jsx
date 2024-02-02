import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Lorem. </span>
          Ipsump
        </h2>
        <p className="mt-4 info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          necessitatibus quis magni? Soluta voluptates et cumque ducimus
          consequatur suscipit incidunt.
        </p>
        <p className="mt-6 info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea iure
          corrupti sunt adipisci hic suscipit, quod veniam ex. Error fuga saepe
          velit repellat aut architecto reprehenderit tempora nisi assumenda
          labore?
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
