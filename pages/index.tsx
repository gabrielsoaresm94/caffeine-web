import type { NextPage } from "next";
import Dashboard from "./dashboard";
import Login from "./login";

const Home: NextPage = () => {
  return (
    <>
      <Login></Login>
      {/* <Dashboard></Dashboard> */}
    </>
  );
};

export default Home;
