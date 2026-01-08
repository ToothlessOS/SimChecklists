import type { ReactNode } from "react";
import type { ChecklistData } from "./types";
import { useState } from "react";
import { FiList, FiX } from "react-icons/fi";

interface Props {
  content: ChecklistData;
}

function NavFloat({ content }: Props): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const navContent = Object.entries(content).map(
    ([sectionTitle, sectionData]) => {
      return (
        <button
          className={`fab-action-btn section-title text-white ${sectionData.color}`}
          onClick={() => (window.location.hash = "#" + sectionTitle)}
          key={sectionTitle}
        >
          {sectionTitle}
        </button>
      );
    }
  );

  return (
    <>
      <div
        className={`fab-backdrop ${isOpen ? "fab-backdrop-open" : ""}`}
        onClick={toggle}
      />
      <div className="fab-container">
        <div className={`fab-actions ${isOpen ? "fab-actions-open" : ""}`}>
          {navContent}
        </div>

        <button className="fab-main" onClick={toggle}>
          {isOpen ? <FiX /> : <FiList />}
        </button>
      </div>
    </>
  );
}

export default NavFloat;
