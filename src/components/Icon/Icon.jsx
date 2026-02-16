import "./Icon.css";

function Icon({ src, size = 16 }) {
  return (
    <img src={src} width={size} height={size} alt="" className="icon"></img>
  );
}

export default Icon;
