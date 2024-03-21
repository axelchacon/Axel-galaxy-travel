import "./Container.css";
export const Container = ({ title, children }) => {
  return (
    <section className="container">
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
};
