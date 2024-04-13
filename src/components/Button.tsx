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
  const smallStyles = small ? "px-2 py-1" : "py-2.5 px-7";
  const outlineStyles = outlined
    ? "bg-white/90 text-primary shadow-2xl hover:bg-white/80"
    : "text-white bg-primary hover:bg-primary/60";
  return (
    <button
      className={`rounded text-sm ${className} ${smallStyles} ${outlineStyles}`}
      {...props}
    ></button>
  );
};
export default Button;
