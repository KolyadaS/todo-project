import "./Button.css";

function Button({ onClick, type = "button", variant = "primary", children }) {
  return (
    <button onClick={onClick} type={type} className={`btn btn_${variant}`}>
      {children}
    </button>
  );
}

export default Button;
