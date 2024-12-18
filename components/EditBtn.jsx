
import Link from "next/link";
import React from "react";

const EditBtn = ({ id }) => {

  return (
  
        <Link className="cursor-pointer" href={`/blog/update/${id}`}>
          Update
        </Link>
   
  );
};

export default EditBtn;