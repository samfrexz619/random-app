import { Outlet } from "react-router-dom";

const NavLayout = () => {
  return ( 
    <main>
      <p>nav layout test</p>
      <Outlet  />
    </main>
   );
}
 
export default NavLayout;