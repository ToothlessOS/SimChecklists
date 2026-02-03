import "bootstrap/dist/css/bootstrap.min.css";
import type { ReactNode } from "react";
import NavbarComp from "../components/NavbarComp";
import Checklist from "../components/Checklist";
import type { ChecklistData } from "../components/types";
import B737NGChecklistCHN from "../checklists/B737NGChecklistCHN";
import entriesAvail from "../checklists/available";
import NavFloat from "../components/NavFloat";

function B737_NG_CHN(): ReactNode {
  const content = B737NGChecklistCHN as ChecklistData;

  return (
    <>
      <NavbarComp entries={entriesAvail} />
      <br />
      <h1 className="text-xl font-bold text-center">Boeing 737NG 快速检查单</h1>
      <NavFloat content={content} />
      <div>
        <Checklist content={content} />
      </div>
    </>
  );
}

export default B737_NG_CHN;
