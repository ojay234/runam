type ButtonProp = {
  eventFunc?: () => void;
  width: number;
  height: number;
  background: string;
  text: string;
};

const Button: React.FC<ButtonProp> = ({
  eventFunc,
  width,
  height,
  background,
  text,
}) => {
  return (
    <button
      onClick={eventFunc}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${background}`,
      }}
      className={
        background == "transparent"
          ? "button_1 rounded-md text-black"
          : "button_1 rounded-md text-white"
      }
    >
      {text}
    </button>
  );
};

export default Button;
