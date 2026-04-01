
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Carted from './components/Carted'
import Models from './components/Models'
import NavBar from './components/Navbar'
import Rating from './components/Rating'
import Footer from './components/Footer'
import Pricing from './components/Pricing'

const getModels = async () =>{
const res =await fetch("/models.json")
return res.json();
}

const modelPromise = getModels()

function App() {
const[activeTab , setActiveTab] = useState("products")
const [carts , setCarts] = useState([])
console.log(carts);
// console.log(activeTab);
return (
<>
    
<NavBar></NavBar>
<Banner></Banner>

{/* name of each tab group should be unique */}



<Rating></Rating>
    <div className="text-center mb-28.5 mt-22.5">
        <h2 className="font-bold text-[48px] ">Premium Digital Tools</h2>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
<div className="tabs tabs-box mt-22.5 justify-center bg-transparent">
  <input type="radio" name="my_tabs_1" 
  className="tab rounded-full w-40 font-bold "
   aria-label="Products"  
   onClick={()=>setActiveTab("products")} defaultChecked />

  <input type="radio" name="my_tabs_1" 
  className="tab rounded-full w-40 font-bold" 
  aria-label={`carts (${carts.length})`}
  onClick={()=>setActiveTab("cart")}/>
 
</div>

{ activeTab === "products" && <Models modelPromise={modelPromise} carts ={carts} setCarts={setCarts}></Models>}
{ activeTab === "cart" && <Carted carts={carts} setCarts={setCarts}></Carted>}

<Pricing></Pricing>
<Footer></Footer>

    </>
  )
}

export default App
