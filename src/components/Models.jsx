import React, { use } from "react";
import Card from "./Card";

const Models = ({ modelPromise, setCarts, carts }) => {
  const models = use(modelPromise);
  // console.log(models);

  return (
    <div className="my-22.5">
      <div className="text-center mb-28.5">
        <h2 className="font-bold text-[48px] ">Premium Digital Tools</h2>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  container mx-auto ">
        {models.map((model) => (
          <Card
            key={model.id}
            model={model}
            carts={carts}
            setCarts={setCarts}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Models;
