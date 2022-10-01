import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <li className="px-6 my-2 bg-blue-600 text-white rounded-tl-lg rounded-br-lg hover:bg-amber-400 p-4 text-center mx-4 sm:mx-10 md:mx-6 lg:mx-2">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
