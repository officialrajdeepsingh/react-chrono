"use client";

import React from "react";
import { Chrono } from "react-chrono";
// import Image from "next/image";
// import Link from "next/link";

const items = [
  {
    title: "May 2020",
    cardTitle: "An Essential Guide to JavaScript null",
    cardSubtitle:
      "In this tutorial, you’ll learn about the JavaScript null and how to handle it effectively.",
    cardDetailedText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit mattis mollis. Mauris aliquet, ligula vitae pretium dapibus, ligula ipsum elementum diam.`,
  },
  {
    title: "October 2020",
    cardTitle: "How to Check if an Array Contains a Value in Javascript",
    cardSubtitle:
      "In this tutorial, you’ll learn how to check if an array contains a value in JavaScript.",
    cardDetailedText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit mattis mollis. Mauris aliquet, ligula vitae pretium dapibus, ligula ipsum elementum diam.`,
  },
  {
    title: "July 1940",
    cardTitle: "Install a JavaScript source code editor.",
    cardSubtitle:
      "In this tutorial, you will learn about JavaScript code editors and how to install the Visual Studio Code for coding JavaScript.",

    cardDetailedText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit mattis mollis. Mauris aliquet, ligula vitae pretium dapibus, ligula ipsum elementum diam.`,
  },
];

// function Card() {
//   return (
//     <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
//       <Link
//         href={"/"}
//         className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
//       >
//         <Image
//           src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
//           alt="demo image"
//           className="h-60 object-cover"
//         />
//         <div className="px-6 py-4">
//           <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
//             lifestyle
//           </p>
//           <p className="mb-4 text-xl font-semibold">
//             The latest news with Flowspark
//           </p>
//           <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
//             Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet luctus
//             venenatis elit ut aliquam, purus sit amet luctus venenatis
//           </p>
//           <div className="flex">
//             <img
//               src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPLaceholder%20Image%20Secondary.svg?alt=media&token=b8276192-19ff-4dd9-8750-80bc5f7d6844"
//               alt=""
//               className="mr-4 h-10 w-10 rounded-full object-cover"
//             />
//             <div className="flex flex-col">
//               <h6 className="text-base font-bold">Laila Bahar</h6>
//               <div className="flex flex-col lg:flex-row">
//                 <p className="text-sm text-gray-500">Sept 28, 2022</p>
//                 <p className="mx-2 hidden text-sm text-gray-500 lg:flex">-</p>
//                 <p className="text-sm text-gray-500">6 mins read</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }

export default function page() {
  return (
    <div className="bg-gray-200 mt-12 container mx-auto p-3">
      <Chrono
        items={items}
        mode="VERTICAL"
        disableToolbar={true}
        cardHeight={64} // sets the height of the timeline card to 200px
        cardWidth={724}
      />
    </div>
  );
}

/*

<div className="bg-gray-100 py-10 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x200"
        alt="Card image"
      />
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          50+ Best creative website themes & templates
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Lorem ipsum dolor sit amet pretium consectetur adipiscing
          elit. Lorem consectetur adipiscing elit.
        </p>
        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition">
          View Details
        </button>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x200"
        alt="Card image"
      />
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          The ultimate UX and UI guide to card design
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Lorem ipsum dolor sit amet pretium consectetur adipiscing
          elit. Lorem consectetur adipiscing elit.
        </p>
        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition">
          View Details
        </button>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x200"
        alt="Card image"
      />
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Creative Card Component designs graphic elements
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Lorem ipsum dolor sit amet pretium consectetur adipiscing
          elit. Lorem consectetur adipiscing elit.
        </p>
        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition">
          View Details
        </button>
      </div>
    </div>
  </div>
</div>

<div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
  <div className="relative">
    <img
      className="w-full"
      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
      alt="Product Image"
    />
    <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
      SALE
    </div>
  </div>
  <div className="p-4">
    <h3 className="text-lg font-medium mb-2">Product Title</h3>
    <p className="text-gray-600 text-sm mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
      vitae ante vel eros fermentum faucibus sit amet euismod lorem.
    </p>
    <div className="flex items-center justify-between">
      <span className="font-bold text-lg">$19.99</span>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Buy Now
      </button>
    </div>
  </div>
</div>

*/
