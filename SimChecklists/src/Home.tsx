import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";

const Home = () => {
  let entries = { C172: "/c172" };

  return (
    <>
      <NavbarComp entries={entries} />
      <h1 className="text-3xl font-bold underline text-center">
        SimChecklists
      </h1>
    </>
  );
};

export default Home;
