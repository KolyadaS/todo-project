import "./Button.css";

function Button({ onClick, type = "button", title, children }) {
  return (
    <button title={title} onClick={onClick} type={type} className={`btn`}>
      {children}
    </button>
  );
}

export default Button;
