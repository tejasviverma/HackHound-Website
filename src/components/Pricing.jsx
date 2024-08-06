// import { CheckCircle2 } from "lucide-react";
// import { pricingOptions } from "../constants";
import { faceCards } from "../constants";
const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Our Team
      </h2>
      <div className="flex flex-wrap">
        {faceCards.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl text-center">
              <img
                src={card.image}
                alt={card.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-4xl mb-2">{card.name}</p>
              <p className="text-xl text-neutral-400 mb-4">{card.title}</p>
              <p className="text-neutral-400">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
