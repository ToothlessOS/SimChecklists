import type { ReactNode } from "react";
import type { CheckNote } from "./types";

interface Props {
  item: CheckNote;
}

function ChecklistNote({ item }: Props): ReactNode {
  return (
    <>
      <div className="py-1">
        <div className="flex items-center justify-between">
          <span
            className={`font-medium ${item.highlight ? " text-red-500" : ""}`}
          >
            {" " + item.description}
          </span>
        </div>
      </div>
    </>
  );
}

export default ChecklistNote;
