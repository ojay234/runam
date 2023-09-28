import React from "react";

type textareaProps = {
  changeFunc: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  error: string;
  value: string;
};

const CustomTextarea: React.FC<textareaProps> = ({
  changeFunc,
  label,
  error,
  value,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs">{label}</label>
      <textarea
        className="border-[1px] border-[#c1c1c1] rounded-[5px] p-1"
        value={value}
        onChange={changeFunc}
      />
      <p className="text-sm">{error}</p>
    </div>
  );
};

export default CustomTextarea;
