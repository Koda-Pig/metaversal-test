const Card = ({ children }) => {
  return (
    <div className="border border-content-border rounded-2xl mb-4 bg-white">
      {children}
    </div>
  );
};

export default Card;
