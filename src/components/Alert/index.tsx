import { ReactNode } from "react";
import "./style.min.css";

type AlertProps = {
  variant: "success" | "info" | "warning" | "error";
  children?: ReactNode;
  type?: "inline" | "toast";
  onClick?(): void;
};

export function Alert({ children, variant = "info", type = "toast" }: AlertProps) {
  return (
    <div className={`ic-alert ${variant} ${type ? type : ""}`}>
      <div className="ic-alert__icon">
        {/* <SvgIcon icon={variant} /> */}
      </div>
      <div className="ic-alert__texts">
        {children && (
          <div className="ic-alert__texts__description">
            <p>{children}</p>
          </div>
        )}
      </div>
    </div>
  );
}