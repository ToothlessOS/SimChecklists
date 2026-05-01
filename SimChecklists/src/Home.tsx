import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import NavMain from "./components/NavMain";
import heroImg from "./assets/profile.webp";
import weatherAdvertImg from "./assets/weather_advert.webp";
import entriesAvail from "./checklists/available";

const Home = () => {
  // Set up the entries for the Navbar component and the mainpage.
  // { name to display: link }
  const entries = entriesAvail;

  return (
    <>
      <NavbarComp entries={entries} />
      <br />
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

      <div className="flex items-center justify-center my-6 pb-8">
        <a href="/weather">
          <img
            src={weatherAdvertImg}
            alt="METAR Weather Search"
            className="object-cover object-center w-96 h-48 cursor-pointer"
          />
        </a>
      </div>
    </>
  );
};

export default Home;
