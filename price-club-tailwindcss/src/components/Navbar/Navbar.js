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
      {open ? (
        <XMarkIcon
          onClick={() => {
            setOpen(!open);
          }}
          className="h-6 w-6"
        />
      ) : (
        <Bars3Icon
          onClick={() => {
            setOpen(!open);
          }}
          className="h-6 w-6"
        />
      )}
      {/* <Bars3Icon
        onClick={() => {
          setOpen(!open);
        }}
        className="h-6 w-6"
      />
      <span>{open ? "open" : "closed"}</span> */}
      <ul className="md:flex justify-center text-2xl">
        {routes.map((route) => (
          <div key={route.id}>
            <Link route={route} />
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
