import "./Header.css";

function Header({ children }) {
  return (
    <div className="header">
      <h1>To do app</h1>
      {children}
    </div>
  );
}

export default Header;
