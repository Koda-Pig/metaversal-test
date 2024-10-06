const Card = ({ children, classNames = "" }) => {
  const classes = `${classNames} border border-content-border rounded-2xl bg-white shadow-default`;

  return <div className={classes}>{children}</div>;
};

export default Card;
