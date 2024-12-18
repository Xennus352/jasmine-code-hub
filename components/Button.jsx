
import React from "react";

const Button =  ({ title, btnType ,  }) => {
  return (
    <>
      <input
        type={btnType}
        value={title}
        
        className="btn text-green-600 w-full
             max-w-xs lg:max-w-screen-md lg:col-span-2"
      />
    </>
  );
};

export default Button;
