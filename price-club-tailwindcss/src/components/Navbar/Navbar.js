import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Link from "../Link/Link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Login", path: "/login" },
    { id: 5, name: "Register", path: "/register" },
  ];
  return (
    <nav>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="h-16 w-16 md:hidden"
      >
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      {/* <Bars3Icon
        onClick={() => {
          setOpen(!open);
        }}
        className="h-6 w-6"
      />
      <span>{open ? "open" : "closed"}</span> */}
      <ul
        className={`md:flex justify-center text-2xl relative ${
          //   open ? `top-20` : `top-[20px]`
          open ? `show m-auto` : `hidden`
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
