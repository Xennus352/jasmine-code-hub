import { getSingleBlog } from "@/actions/blog";
import BlogDetail from "@/components/BlogDetail";
import React from "react";

const Page = async ({ params }) => {
  const id = params.blogId;
  const blog = await getSingleBlog(id);
  return (
    <>
      <div className=" border border-green-500 mb-5 rounded-md">
        {blog && <BlogDetail blog={blog} />}
      </div>
    </>
  );
};

export default Page;
