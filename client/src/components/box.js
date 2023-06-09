export const Box = ({ children, className = "", onClick }) => {
  return (
    <div
      className={`mt-3 p-2 rounded-lg box-shadow ${
        className.includes("bg") ? className : className.concat(" bg-white")
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
