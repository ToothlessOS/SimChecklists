import type { ReactNode } from "react";
import type { CheckItem } from "./types";
import ChecklistEntry from "./ChecklistEntry";

interface Props {
  color: string;
  title: string;
  items: CheckItem[];
}

function ChecklistSection({ color, title, items }: Props): ReactNode {
  return (
    <div>
      <div className="p-4" style={{ backgroundColor: color }}>
        <h2 className="m-0">{title}</h2>
      </div>
      {items.map((item) => (
        <ChecklistEntry key={item.id} item={item} checked={false} />
      ))}
    </div>
  );
}

export default ChecklistSection;
