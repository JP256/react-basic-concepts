import "./CodeExampleContainer.css";
import CodeExample from "../CodeExample/CodeExample";
import { examples } from "../../data/data";
import { useState } from "react";

const CodeExampleContainer = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(tp) {
    setSelectedTopic((i) => (i = tp));
  }
  let comment = (
    <h3 style={{ color: "#36454f", marginLeft: "20px" }}>
      Please select a topic
    </h3>
  );
  if (selectedTopic) {
    comment = <pre>{examples[selectedTopic].code}</pre>;
  }
  console.log(selectedTopic);
  return (
    <div className="CodeExampleContainer">
      <h2 style={{ paddingTop: "20px" }}>Examples</h2>
      <menu>
        <CodeExample
          title={"Components"}
          onSelect={() => handleClick("component")}
          isSelected={selectedTopic === "component"}
        />
        <CodeExample
          title={"JSX"}
          onSelect={() => handleClick("jsx")}
          isSelected={selectedTopic === "jsx"}
        />
        <CodeExample
          title={"Props"}
          onSelect={() => handleClick("props")}
          isSelected={selectedTopic === "props"}
        />
        <CodeExample
          title={"State"}
          onSelect={() => handleClick("state")}
          isSelected={selectedTopic === "state"}
        />
      </menu>
      {comment}
    </div>
  );
};

export default CodeExampleContainer;
