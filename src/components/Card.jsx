import React, { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ model, setCarts, carts }) => {
  const [isBuy, setIsBuy] = useState(false);

  const handleBuy = () => {
    setIsBuy(true);

    const isFound = carts.find(item => item.id === model.id)
    if(isFound){
    toast.error("Item already in cart")
    return;
    }
    setCarts([...carts , model])

    toast.success("Item add hyse cart e")
  };


  return (
    <div className="shadow-xl w-95 h-105.5 space-y-4 p-6 rounded-2xl">
      <div>
        <img src={model.icon} alt="" />
      </div>

      <div>
        <h3 className="font-bold text-[24px]">{model.name} </h3>
        <p className="text-[16px] text-[#627382]"> {model.description}</p>

        <div className="items-center">
          <span className="font-bold text-[24px]">${model.price}</span>/
          <span className="text-[#627382]">{model.period}</span>{" "}
        </div>

        <div className="items-center gap-8 text-sm text-zinc-600 pt-6 space-y-2 ">
          <div>✓ 50+ Frontier Models</div>
          <div>✓ No Usage Limits</div>
          <div>✓ Cancel Anytime</div>
        </div>
        <button
          onClick={handleBuy}
          className="btn btn-primary w-full rounded-full mt-3"
        >
          {isBuy ? "Purchase" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default Card;
