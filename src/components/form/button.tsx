function Button({
  text,
  onClick,
  color = "secondary",
  disabled = false,
  className,
}: {
  text: string;
  onClick?: () => void;
  color?: string;
  disabled?: boolean;
  className?: string;
}) {
  const baseStyle = "rounded-xl p-3 w-full text-sm capitalize text-center font-bold";
  const disabledStyle = "opacity-50 cursor-not-allowed";

  const colorStyles = {
    secondary:
      "bg-secondary text-primary hover:bg-text_light hover:text-secondary",

    primary:
      "bg-bg_light text-dark hover:bg-text_light hover:text-secondary",
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const combinedStyle = `${baseStyle} ${colorStyles[color]} ${
    disabled ? disabledStyle : ""
  } ${className}`;

  return (
    <div className={combinedStyle} onClick={onClick}>
      {text}
    </div>
  );
}

export default Button;
