import type { ReactNode } from "react";
import type { CheckItem } from "./types";
import { useState } from "react";

interface Props {
  item: CheckItem;
  checked: boolean;
}

function ChecklistEntry({ item, checked }: Props): ReactNode {
  // useState to manage the state of the checkbox
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <div className="py-1">
      <div className="flex items-center justify-between">
        <label className="flex items-center w-full gap-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="h-4 w-4 align-middle"
          />
          <span
            className={`font-medium ${item.highlight ? " text-red-500" : ""}`}
          >
            {" " + item.action}
          </span>
          <span className="flex-1 border-b border-dotted border-gray-700 mx-2 self-end mb-1 " />
          <span
            className={`font-medium ${item.highlight ? " text-red-500" : ""}`}
          >
            {item.expected}
          </span>
        </label>
      </div>
      {item.note && (
        <div className="ml-6 text-[0.7rem] text-gray-500">{item.note}</div>
      )}
    </div>
  );
}

export default ChecklistEntry;
