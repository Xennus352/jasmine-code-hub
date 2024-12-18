import React, { ChangeEvent } from "react";



const Input = ({ placeHolder, name, type, required, value , onChange}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        required={required}
        defaultValue={value}
        onChange={onChange}
        className="input w-full focus:border-t-0 focus:border-x-0  focus:outline-none py-10 text-lg text-green-600"
      />
    </>
  );
};

export default Input;
