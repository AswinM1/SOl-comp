"use client"
import Button from "./Button";
import Cube from "./Cube";
import Liquid from "./Liquid";
import Card from "./Card";
import Hoversee from "./Macdock";
import Mask from "./Mask";
import Searchbar from "./Searchbar";
import { useState } from "react";
import Action from "./Action";
import IDCard from "./Id";
import Feedback from "./Feedback";
import Picker from "./Picker";
import Shimmer from "./Shimmer";
import Pendulum from "./Pendulum";
import Textflip from "./Textflip";

const components = [
  // =========================
  // COMPONENTS
  // =========================
  {
    title: "Cube",
    desc: "A cube loader",
    preview: <Cube />,
    image: false,
  },
  {
    title: "Liquid Text",
    desc: "A clip-path animated letter",
    preview: <Liquid />,
    image: false,
  },
  {
    title: "Liquid Card",
    desc: "Animated card",
    preview: <Card />,
    image: false,
  },
  {
    title: "Mac Dock",
    desc: "A Mac-style dock",
    preview: <Hoversee />,
    image: false,
  },
  {
    title: "Mac Dock",
    desc: "A Mac-style dock",
    preview: <Shimmer></Shimmer>,
    image: false,
  },
  {
    title: "Masked Scroll",
    desc: "Masked scroll effect",
    preview: <Mask />,
    image: false,
  },
  {
    title: "Searchbar",
    desc: "A simple searchbar",
    preview: <Searchbar />,
    image: false,
  },
  {
    title: "Text Flip",
    desc: "Animated text transition",
    preview: <Textflip />,
    image: false,
  },
  {
    title: "Action",
    desc: "Interactive action component",
    preview: <Action />,
    image: false,
  },
  {
    title: "ID Card",
    desc: "Interactive ID card",
    preview: <IDCard />,
    image: false,
  },
  {
    title: "Feedback",
    desc: "Animated feedback form",
    preview: <Feedback />,
    image: false,
  },
  {
    title: "Picker",
    desc: "Infinite wheel picker",
    preview: <Picker />,
    image: false,
  },
  {
    title: "Pendulum",
    desc: "Infinite wheel picker",
    preview: <Pendulum />,
    image: false,
  },

  
];
function ShowcasePage() {
 
  return (
    <div className="h-full w-full text-white px-6 py-16">
     
      

      <div className="max-w-xl w-2xl  mx-auto flex flex-col gap-[24px]">
        {components.map((item, index) => (
          <div
            key={index}
            className={`group rounded-3xl  ${!item.image? `bg-[#dddddd] border border-white/10`:""} overflow-hidden hover:border-white/20 transition`}
          >
           
            <div className={` flex items-center mx-auto p-10 mt-4  justify-center `}>
              {item.preview}
            </div>

            <div className="p-5">
              
                <div>
                 

                  
                </div>

               
              </div>

            
            </div>
         
        ))}
      </div>
    </div>
  );
}

export default ShowcasePage;