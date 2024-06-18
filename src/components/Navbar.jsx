import React from "react";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import logo from "/logo.svg"
import { Link } from "react-router-dom";

const Navbar = () => {

    const navItems = [
        {title: "Jewelery & Accessories", path:"/"},
        {title: "Clothing & Shoes", path:"/"},
        {title: "Home & Living", path:"/"},
        {title: "Toys & Entertainment", path:"/"},
        {title: "Art & Collectibles", path:"/"},
        {title: "Craft Supplies & Tools", path:"/"},
    ]
  return (
    <header className="max-w-screen-exl xl:px-28 px-4 absolute top-0 right-0 left-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch />
        <a href="/"><img src={logo} alt="" /></a>
        <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
            <a href="/" className="flex items-center gap-2"><FaUser/>Account</a>
            <a href="/" className="flex items-center gap-2"><FaShoppingBag />Shoppig</a>
        </div>
      </nav>
      <hr />

      {/* category items */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-Black hidden">
            {
                navItems.map(({title, path})=>(
                    <li key={title} className="hover:text-orange-500">
                        <Link to="/">{title}</Link>
                    </li>
                ))
            }
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
