import "./DoneView.css";

function DoneView({ children }) {
  return (
    <div className="done-view">
      <h2>Сделано</h2>
      {children}
    </div>
  );
}

export default DoneView;
