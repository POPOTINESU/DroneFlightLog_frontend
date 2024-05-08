type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
};

export const PrimaryButton = ({
  children,
  className,
  onClick,
}: PrimaryButtonProps) => {
  return (
    <>
      <button
        className={`bg-blue-500 hover:bg-sky-600 text-white rounded ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
