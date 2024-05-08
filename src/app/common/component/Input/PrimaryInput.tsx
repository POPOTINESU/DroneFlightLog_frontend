import { PrimaryInputProps } from "@/app/common/types/PrimaryInput";

export const PrimaryInput = ({
  placeholder,
  type,
  value,
  onChange,
  className,
  ...props
}: PrimaryInputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className={`border-2 border-gray-300 rounded ${className}`}
      {...props}
    />
  );
};
