import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const toggle = (id) => {
    setSelected(selected === id ? null : id);
  };
}
