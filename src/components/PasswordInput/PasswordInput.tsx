import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

type PasswordInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  name?: string;
  className?: string;
};

export default function PasswordInput({
  value,
  onChange,
  placeholder,
  id,
  name,
  className = "",
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={showPassword ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${className} pr-12`}
      />

      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          text-text-secondary
          hover:text-primary
          transition
          cursor-pointer
        "
      >
        {showPassword ? (
          <HiOutlineEye className="w-5 h-5" />
        ) : (
          <HiOutlineEyeSlash className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
