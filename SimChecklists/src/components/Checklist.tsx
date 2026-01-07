import type { ReactNode } from "react";
import type { ChecklistData } from "./types";
import ChecklistSection from "./ChecklistSection";

interface Props {
  content: ChecklistData;
}

function Checklist({ content }: Props): ReactNode {
  const checklistContent = Object.entries(content).map(
    ([sectionTitle, sectionData]) => {
      return (
        <div className="checklist-card" key={sectionTitle}>
          <ChecklistSection
            title={sectionTitle}
            color={sectionData.color}
            items={sectionData.content}
          />
        </div>
      );
    }
  );

  return <div className="checklist-columns">{checklistContent}</div>;
}

export default Checklist;
