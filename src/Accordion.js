import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  //const [selected, setSelected] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  // const toggle = (id) => {
  //   setSelected(selected === id ? null : id);
  // };
  function toggleItem(id) {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
      //This removes if already selected.
    } else {
      setSelectedItems([...selectedItems, id]);
      //This adds if not selected.
    }
  }
  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item) => (
          <div className="item" key={item.id}>
            <div className="title" onClick={() => toggleItem(item.id)}>
              <h3 className="question">{item.question}</h3>
              <span>{selectedItems === item.id ? "-" : "+"}</span>
              {selectedItems.includes(item.id) && (
                <div className="content">{item.answer}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
