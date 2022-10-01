import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

const Link = ({ route }) => {
  return (
    <div>
      <li className="px-6 my-2 bg-blue-600 text-white rounded-tl-lg rounded-br-lg hover:bg-amber-400 p-4 text-center mx-4 sm:mx-10 md:mx-6 lg:mx-2">
        <a href={route.path}>
          <BeakerIcon className="h-6 w-6 inline mx-3 mb-1" aria-hidden="true" />
          {route.name}
        </a>
      </li>
    </div>
  );
};

export default Link;
