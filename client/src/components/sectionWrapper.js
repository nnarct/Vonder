export const SectionWrapper = ({ children, className = "" }) => {
  return (
    <>
      <div className={`p-3 ${className}`}>{children}</div>
    </>
  );
};
