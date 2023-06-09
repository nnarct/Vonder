export const SubHeader = ({ children, className = "" }) => {
  return (
    <>
      <h2 className={`text-xl font-bold tracking-tighter ${className}`}>
        {children}
      </h2>
    </>
  );
};
