"use client";
import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "May 2020",
    cardTitle: "An Essential Guide to JavaScript null",
    cardSubtitle:
      "In this tutorial, you’ll learn about the JavaScript null and how to handle it effectively.",
    cardDetailedText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit mattis mollis. Mauris aliquet, ligula vitae pretium dapibus, ligula ipsum elementum diam.`,
    media: {
      name: "Dunkirk beach during evacuation",
      source: {
        url: "https://www.youtube.com/embed/Q-cPtlYG1cY?rel=0&cc_load_policy=1&autoplay=0",
      },
      type: "VIDEO",
    },
  },
  {
    title: "October 2020",
    cardTitle: "How to Check if an Array Contains a Value in Javascript",
    cardSubtitle:
      "In this tutorial, you’ll learn how to check if an array contains a value in JavaScript.",
    cardDetailedText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit mattis mollis. Mauris aliquet, ligula vitae pretium dapibus, ligula ipsum elementum diam.`,

    media: {
      name: "Dunkirk beach during evacuation",
      source: {
        url: "https://cdn.pixabay.com/photo/2017/08/02/21/15/rain-2573488_1280.jpg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "July 1940",
    cardTitle: "Install a JavaScript source code editor.",
    cardSubtitle:
      "In this tutorial, you will learn about JavaScript code editors and how to install the Visual Studio Code for coding JavaScript.",

    cardDetailedText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit mattis mollis. Mauris aliquet, ligula vitae pretium dapibus, ligula ipsum elementum diam.`,
    media: {
      name: "Dunkirk beach during evacuation",
      source: {
        url: "https://cdn.pixabay.com/photo/2022/02/03/18/49/blossoms-6991112_1280.jpg",
      },
      type: "IMAGE",
    },
  },
];

export default function page() {
  return (
    <div className="bg-gray-100  mt-12 container mx-auto">
      <Chrono
        items={items}
        cardHeight={64} // Adjusts the card height of the timeline card to 64 pixels.
        mediaHeight={364} // Adjusts the media Height of the timeline card to 364 pixels.
        cardWidth={624} // Adjusts the card width of the timeline card to 200 pixels.
        lineWidth={15} // Adjusts the timeline track line property to customise its width.
        disableToolbar={true} // Disable the toolbar in React Chrome.
        mode="VERTICAL" // Adjust the orientation of the timeline to either vertical or horizontal.
      />
    </div>
  );
}
