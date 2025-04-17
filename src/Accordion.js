import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const toggle = (id) => {
    setSelected(selected === id ? null : id);
  };
  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item) => (
          <div className="item" key={item.id}>
            <div className="title" onClick={() => toggle(item.id)}>
              <h3>{item.question}</h3>
              <span>{selected === item.id ? "-" : "+"}</span>
            </div>
            {selected === item.id && (
              <div className="content">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
