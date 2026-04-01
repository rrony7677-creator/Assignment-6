import React, { use } from "react";
import Card from "./Card";

const Models = ({ modelPromise, setCarts, carts }) => {
  const models = use(modelPromise);
  // console.log(models);

  return (
    <div className="my-7.5 ">
  



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
