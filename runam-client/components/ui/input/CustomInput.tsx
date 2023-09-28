import React from "react";

type inputProps = {
  changeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error: string;
  value: string;
};

const CustomInput: React.FC<inputProps> = ({
  changeFunc,
  label,
  error,
  value,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs">{label}</label>
      <input
        className="border-[1px] border-[#c1c1c1] rounded-[5px] p-1"
        type="text"
        value={value}
        onChange={changeFunc}
      />
      <p className="text-sm">{error}</p>
    </div>
  );
};

export default CustomInput;
