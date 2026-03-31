
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Carted from './components/Carted'
import Models from './components/Models'
import NavBar from './components/Navbar'

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
<div className="tabs tabs-box mt-6.25 justify-center bg-transparent">
  <input type="radio" name="my_tabs_1" 
  className="tab rounded-full w-40 "
   aria-label="Products"  
   onClick={()=>setActiveTab("products")} defaultChecked />

  <input type="radio" name="my_tabs_1" 
  className="tab rounded-full w-40 " 
  aria-label="Cart 2"
  onClick={()=>setActiveTab("cart")}/>
 
</div>

{ activeTab === "products" && <Models modelPromise={modelPromise} carts ={carts} setCarts={setCarts}></Models>}
{ activeTab === "cart" && <Carted></Carted>}

    </>
  )
}

export default App
