const Card = ({ children }) => {
  return (
    <div className="border border-content-border rounded-2xl bg-white shadow-default mt-6">
      {children}
    </div>
  );
};

export default Card;
