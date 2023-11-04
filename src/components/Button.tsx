import { FC, ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  outlined?: boolean;
  small?: boolean;
};

const Button: FC<Props> = ({
  className,
  outlined = false,
  small = false,
  ...props
}) => {
  const smallStyles = small ? "px-2 py-1" : "py-4 px-7";
  const outlineStyles = outlined
    ? "bg-black border border-primary text-primary shadow-2xl baseline hover:bg-gray-900"
    : "text-white bg-primary baseline hover:bg-primary/60";
  return (
    <button
      className={`${className} ${smallStyles} ${outlineStyles}`}
      {...props}
    ></button>
  );
};
export default Button;
