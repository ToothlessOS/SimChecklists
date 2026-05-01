import "bootstrap/dist/css/bootstrap.min.css";
import type { ReactNode } from "react";
import NavbarComp from "../components/NavbarComp";
import entriesAvail from "../checklists/available";
import WeatherMain from "../components/WeatherMain";

function C172(): ReactNode {
  return (
    <>
      <NavbarComp entries={entriesAvail} />
      <WeatherMain />
    </>
  );
}

export default C172;
