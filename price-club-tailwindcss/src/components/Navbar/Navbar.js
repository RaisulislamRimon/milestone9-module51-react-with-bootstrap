import React from "react";
import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Login", path: "/login" },
    { id: 5, name: "Register", path: "/register" },
  ];
  return (
    <nav>
      <ul>
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
