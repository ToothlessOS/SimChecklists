import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import NavMain from "./components/NavMain";
import heroImg from "./assets/profile.png";
import ChecklistEntry from "./components/ChecklistEntry";
import type { CheckItem } from "./components/types";

const Home = () => {
  // Set up the entries for the Navbar component and the mainpage.
  // { name to display: link }
  let entries = {
    C172: "/C172",
    "C172(中文)": "/C172_CHN",
    B737: "/B737",
    "B737(中文)": "/B737_CHN",
    A320: "/A320",
    "A320(中文)": "/A320_CHN",
  };

  // Example checklist entry, to display on the home page
  let refChecklistEntry: CheckItem = {
    id: "ref1",
    action: "Ready for takeoff?",
    expected: "YES!",
    note: "Toggle to check!",
    highlight: true,
  };

  return (
    <>
      <NavbarComp entries={entries} />
      <h1 className="text-3xl font-bold text-center">
        愛乃ちゃん's EFB Project
      </h1>
      <div className="flex flex-col items-center my-4 space-y-2">
        <img
          src={heroImg}
          alt="Aiino's Picture"
          className="object-cover object-center w-96 h-64"
        />
        <p className="text-center text-gray-500">
          Image credits: Visual Arts & Key
        </p>
      </div>

      <p className="text-xl text-center">Available Aircrafts:</p>
      <div className="flex items-center justify-center flex-wrap my-4">
        <NavMain entries={entries} />
      </div>

      <div className="flex items-center justify-center flex-wrap my-4">
        <ChecklistEntry checked={false} item={refChecklistEntry} />
      </div>
    </>
  );
};

export default Home;
