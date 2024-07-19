import clsx from "clsx";
import React from "react";

const Button = ({ id, label, className, onClick, onChange, value }) => {
  return (
    <button id={id} className={clsx('py-2 w-[110px] bg-custom-gray text-xl ', 'active:translate-y-2 duration-150', 'rounded-full border-b-4 border-black text-white', className)} onClick={onClick} onChange={onChange} value={value}>
      {label}
    </button>
  );
};

export default Button;
