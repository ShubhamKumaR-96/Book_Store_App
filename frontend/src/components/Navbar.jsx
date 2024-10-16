import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/dashbaord" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  console.log(isDropDownOpen);

  const currentUser = true;

  return (
    <header className="max-w-screen-2xl mx-auto px-12 py-6 ">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4 ">
          <Link to="/">
            <HiBars3CenterLeft className="size-6" />
          </Link>
          {/* search input  */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search Here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/* right side */}
        <div className="relative flex items-center justify-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                  <img
                    src={avatarImg}
                    alt="avatarImg"
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-400" : ""
                    }`}
                  />
                </button>
                {/* show dropDown */}
                {isDropDownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.name} onClick={()=>setIsDropDownOpen(false)}>
                          <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-7" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <FaRegHeart className="size-7" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiShoppingCart />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
