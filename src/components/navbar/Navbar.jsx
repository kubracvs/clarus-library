import { menuIcon } from "../../helper/iconData";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Clarus Library</Logo>
      <div>
        {menuIcon}
      </div>
      <div>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Register</a>
        <a href="">Login</a>
      </div>
    </Nav>
  )
}

export default Navbar