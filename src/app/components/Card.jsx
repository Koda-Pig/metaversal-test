const Card = ({ children }) => {
  return (
    <div className="border border-content-border rounded-2xl bg-white">
      {children}
    </div>
  );
};

export default Card;
