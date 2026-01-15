import "bootstrap/dist/css/bootstrap.min.css";
import type { ReactNode } from "react";
import NavbarComp from "../components/NavbarComp";
import type { ReferenceData } from "../components/types";
import bib from "../checklists/bib";
import entriesAvail from "../checklists/available";
import heroImg from "../assets/ref.webp";

function References(): ReactNode {
  const ref = bib as ReferenceData;
  const content = Object.entries(ref).map(([name, url]) => {
    return (
      <p text-center>
        <strong>{name}:</strong> <a href={url}>{url}</a>
      </p>
    );
  });

  return (
    <>
      <NavbarComp entries={entriesAvail} />
      <br />
      <h1 className="text-3xl font-bold text-center">References</h1>
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center my-4 space-y-2">
          <img
            src={heroImg}
            alt="Aiino's Picture"
            className="object-cover object-center w-60 h-80"
          />
          <p className="text-center text-gray-500">
            Image credits: Visual Arts & Key
          </p>
        </div>
        <div className="flex flex-col items-center my-4 space-y-2">
          {content}
        </div>
      </div>
    </>
  );
}

export default References;
