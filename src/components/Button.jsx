import "../style/Button.css";
import clsx from "clsx";

const Button = ({ contained, className, children, languageSelect, ...restProps }) => {
  return (
    <button
      className={clsx("button", className, {
        contained: contained,
      })}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
