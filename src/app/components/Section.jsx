const Section = ({ children, title }) => {
  return (
    <section>
      <h2 className="text-black font-extrabold text-2xl mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
