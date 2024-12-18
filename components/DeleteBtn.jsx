"use client";
import { deleteBlog } from "@/actions/blog";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const DeleteBtn = ({ id }) => {
  const router = useRouter();
  const notify = () => toast.error("Successfully Deleted!");

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      await deleteBlog(id);
      notify();
      router.push("/");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Error deleting blog!");
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <input
        type="submit"
        value="Delete"
        className="cursor-pointer"
        name="delete"
      />
    </form>
  );
};

export default DeleteBtn;
