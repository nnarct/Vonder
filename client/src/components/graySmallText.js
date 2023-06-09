export const GraySmallText = ({ children, className = "" }) => {
  return (
    <>
      <div className={`text-xs text-gray-400 ${className}`}>{children}</div>
    </>
  );
};
