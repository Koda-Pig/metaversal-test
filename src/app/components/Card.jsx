const Card = ({ children }) => {
  return (
    <div className="border border-content-border rounded-2xl bg-white shadow-default">
      {children}
    </div>
  );
};

export default Card;
