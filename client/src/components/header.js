export const Header = ({ children, className = "" }) => {
  return (
    <>
      <h1
        className={`relative py-7 text-center text-gray-500 font-bold ${className}`}
      >
        {children}
      </h1>
    </>
  );
};
