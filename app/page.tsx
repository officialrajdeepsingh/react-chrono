"use client";
import React from "react";
import { Chrono } from "react-chrono";

export default function page() {
  return (
    <div className="bg-gray-100 mt-12 container mx-auto">
      <Chrono
        items={[
          {
            title: "May 2020",
            cardTitle: "An Essential Guide to JavaScript null",
            cardSubtitle:
              "In this tutorial, you’ll learn about the JavaScript null and how to handle it effectively.",
            cardDetailedText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit mattis mollis. Mauris aliquet, ligula vitae pretium dapibus, ligula ipsum elementum diam.`,
          },
          {
            title: "October 2020",
            cardTitle:
              "How to Check if an Array Contains a Value in Javascript",
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
        ]}
        mode="VERTICAL"
      />
    </div>
  );
}
