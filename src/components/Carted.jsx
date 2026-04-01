import React from "react";

const Carted = ({carts ,setCarts}) => {

const totalPrice = carts.reduce((sum,item) => sum + item.price,0)

const handlePay = ()=>{
setCarts([])
}

  return (
    <div className="p-8 ">
      <div className="text-center mb-28.5">
        <h2 className="font-bold text-[48px] ">Premium Digital Tools</h2>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

<div>
<h3 className="container mx-auto  text-2xl font-bold mb-8">Your Cart</h3>

<div className="space-y-5">
{carts.map(item => <div className="container mx-auto flex items-center justify-between 
p-8 bg-[#F9FAFC] rounded-2xl" key ={item.id} >
<div>
<div className="flex items-center gap-5">
<img className="h-20 w-20 object-contain" src={item.icon} alt="" />

<div>
<h2 className="text-xl font-bold">{item.name}</h2>
<div className="font-medium text-[#627382]">${item.price}</div>
</div>

</div>

</div>

<div className="text-[#627382]">Remove</div>
{/* 
<div>
<h2 className="text-xl font-bold">{item.name}</h2>
</div>

<div>
{item.price}
</div> */}

</div>)}
</div>
</div>

<div className="container mx-auto space-y-5 mb-22.5">
<div className="flex justify-between"><h2 className="font-bold text-xl mt-10 text-[#627382]"> Total:</h2>
<p className="font-bold text-3xl">${totalPrice}</p>
</div>
<button onClick={handlePay} className="btn btn-primary w-full rounded-full">Proceed to Checkout</button>
</div>

</div>


  );
};

export default Carted;
