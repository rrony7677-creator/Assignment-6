import shoppingCart from "../assets/shopping-cart.png" 


const NavBar = () => {
  return (
<div className="navbar container mx-auto">
<h1 className="font-bold text-blue-400 text-5xl">DigiTools</h1>
<div className="navbar-center md:flex justify-center ">
  <ul className="menu menu-horizontal gap-10 px-1 text-lg ">
<li>
  <a>Products</a>
</li>
<li>
  <a>Features</a>
</li>
<li>
  <a>Pricing</a>
</li>
<li>
  <a>Testimonials</a>
</li>
<li>
  <a>FAQ</a>
</li>
</ul>
</div>

<div className="navbar-end gap-5">
<img src={shoppingCart} alt="" />

<p>Login</p>

<button className="btn bg-blue-500 rounded-full text-white">Get Started</button>
</div>
 {/* <div className="divider"></div> */}
    </div>

  );
};

export default NavBar;