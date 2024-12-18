"use client";
import { useRouter } from "next/navigation";
import React from "react";
import SaveDeleteBtn from "./SaveDeleteBtn";

const SaveCard = ({ id, tag, title, text, saveDelId }) => {
  const router = useRouter();

  return (
    <>
      <div
        className=" mb-2  rounded-md text-green-700
        flex flex-col bg-slate-800  w-full h-auto justify-evenly overflow-y-scroll cursor-pointer shadow-md 
     "
      >
        <div className="p-4">
          <h2 className="uppercase font-bold">{title}</h2>
          <p
            onClick={() => {
              router.push(`/blog/${id}`);
            }}
          >
            {text.substring(0, 30)}
          </p>
          <p>{tag}</p>
          <SaveDeleteBtn id={saveDelId} />
        </div>
      </div>
    </>
  );
};

export default SaveCard;
