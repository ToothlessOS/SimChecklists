import type { ReactNode } from "react";
import type { CheckItem, CheckNote, CheckContent } from "./types";
import ChecklistEntry from "./ChecklistEntry";
import ChecklistNote from "./ChecklistNote";

interface Props {
  color: string;
  title: string;
  items: CheckContent;
}

function ChecklistSection({ color, title, items }: Props): ReactNode {
  return (
    <div>
      <div className={`section-title ${color}`}>
        <h2 className="section-title__text">{title}</h2>
      </div>

      {items.map((item) => {
        if ((item as CheckItem).action !== undefined) {
          return (
            <ChecklistEntry
              item={item as CheckItem}
              checked={false}
              key={(item as CheckItem).id}
            />
          );
        } else {
          return <ChecklistNote item={item as CheckNote} />;
        }
      })}
    </div>
  );
}

export default ChecklistSection;
