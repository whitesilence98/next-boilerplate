import React from "react";

import classes from "./button.module.scss";

import ButtonRipple from "./ripple.component";

import clsx from "clsx";

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
   variant?: "outlined" | "contained" | "text";
   color?: "default" | "primary" | "secondary";
   children?: React.ReactNode;
   endIcon?: React.ReactNode;
   startIcon?: React.ReactNode;
   className?: string;
   loading?: boolean;
   fullWidth?: boolean;
   type?: "submit" | "reset" | "button";
   onClick?: () => void;
}

const Button = (props: IButtonProps) => {
   const {children, color, disabled, loading, onClick, type, className, variant, ...rest} = props;

   const handleClick = () => {
      if (onClick) onClick();
   };

   return (
      <div className={classes["button"]}>
         <button
            disabled={disabled || loading}
            onClick={handleClick}
            className={clsx(
               classes["btn"],
               classes[`btn--${variant}`],
               classes[`btn--${type}`],
               classes[`btn--${color}`],
               className,
            )}
            {...rest}>
            {loading ? <div className={classes["button_loading"]} /> : <span>{children}</span>}
            {!loading && <ButtonRipple color={variant === "contained" ? color : "default"} />}
         </button>
      </div>
   );
};

Button.defaultProps = {
   color: "default",
   variant: "contained",
   type: "primary",
   fullWidth: false,
};

export {Button};
