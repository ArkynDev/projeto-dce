import { Outlet } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { ToggleMobileMenu } from "./components/ToggleMobile/ToggleMobileMenu";

function App() {

  return (
    <>
      <Navbar />
      <ToggleMobileMenu />
      <Outlet />
    </>
  )
}

export default App
