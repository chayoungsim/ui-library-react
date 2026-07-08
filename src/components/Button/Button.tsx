import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import "./Button.scss";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  /**
   * 버튼의 시각적 스타일을 결정합니다.
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /**
   * 버튼의 크기를 결정합니다.
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";
  /**
   * 버튼이 로딩 상태인지 여부를 결정합니다. 로딩 상태에서는 버튼이 비활성화됩니다.
   * @default false
   */
  loading?: boolean;
  /**
   * 버튼 왼쪽에 표시될 아이콘입니다.
   */
  leftIcon?: ReactNode;
  /**
   * 버튼 오른쪽에 표시될 아이콘입니다.
   */
  rightIcon?: ReactNode;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonProps) => {
  const isDisabled = loading || disabled;

  // 클래스 이름을 동적으로 조합합니다.
  const buttonClasses = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    loading ? "is-loading" : "",
    className || "",
  ]
    .join(" ")
    .trim();

  return (
    <button
      type="button"
      className={buttonClasses}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <span className="btn__loader" aria-label="로딩 중"></span>
      ) : (
        <>
          {leftIcon && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
          <span className="btn__text">{children}</span>
          {rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
