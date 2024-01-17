import "./Concepts.css";
export default function Concepts({ title, description, picture }) {
  return (
    <div className="Concepts">
      <img src={picture} alt={title} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}
