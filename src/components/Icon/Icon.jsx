import "./Icon.css";

function Icon({ src, size = 16, alt }) {
  return (
    <img src={src} width={size} height={size} alt={alt} className="icon"></img>
  );
}

export default Icon;
