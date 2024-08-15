import { Outlet } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { ToggleMobileMenu } from "./components/Navbar/ToggleMobileMenu";

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
