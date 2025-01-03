"use client";
import { deleteSaveBlog } from "@/actions/blog";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const SaveDeleteBtn = ({ id }) => {
  const router = useRouter();
  const notify = () => toast.error("Successfully Deleted!");
  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      await deleteSaveBlog(id);
      notify();
      router.refresh();
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Error deleting blog!");
    }
  };
  return (
    <form onSubmit={handleDelete}>
      <button className="cursor-pointer text-center w-full m-1 p-1 rounded-xl hover:shadow-md text-white bg-red-700">
        Delete
      </button>
    </form>
  );
};

export default SaveDeleteBtn;
