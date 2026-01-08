import "bootstrap/dist/css/bootstrap.min.css";
import type { ReactNode } from "react";
import NavbarComp from "../components/NavbarComp";
import Checklist from "../components/Checklist";
import type { ChecklistData } from "../components/types";
import C172Checklist from "../checklists/C172Checklist";
import entriesAvail from "../checklists/available";
import NavFloat from "../components/NavFloat";

function C172(): ReactNode {
  const content = C172Checklist as ChecklistData;

  return (
    <>
      <NavbarComp entries={entriesAvail} />
      <h1 className="text-xl font-bold text-center">
        Cessna 172 Skyhawk Checklist
      </h1>
      <NavFloat content={content} />
      <div>
        <Checklist content={content} />
      </div>
    </>
  );
}

export default C172;
