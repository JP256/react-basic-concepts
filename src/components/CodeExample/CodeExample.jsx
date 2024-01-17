import "./CodeExample.css";
const CodeExample = ({ title, onSelect, isSelected }) => {
  return (
    <div className="CodeExample">
      <button className={isSelected ? "Active" : ""} onClick={onSelect}>
        {title}
      </button>
    </div>
  );
};

export default CodeExample;
