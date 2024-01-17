import Concepts from "../Concepts/Concepts";
import { concepts } from "../../data/data.js";
import "./ConceptsContainer.css";

const ConceptsContainer = ({ title, description, picture }) => {
  return (
    <div className="ConceptsContainer">
      {concepts.map((con) => (
        <Concepts key={con.title} {...con} />
      ))}
    </div>
  );
};

export default ConceptsContainer;
