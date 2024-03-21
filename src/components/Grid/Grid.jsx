import "./Grid.css";

export const Grid = ({ rows, columns, gap, children }) => {
  return (
    <div
      style={{
        gap,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: rows,
      }}
      className="grid"
    >
      {children}
    </div>
  );
};

export default Grid;
