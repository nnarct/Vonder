export const Screen = ({ children, className = "" }) => {
  return (
    <div
      className={`relative max-w-sm mx-auto min-h-[calc(100vh-2.5rem)] my-5 border rounded-2xl py-2 ${className}`}
    >
      {children}
    </div>
  );
};
