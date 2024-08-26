import { Link } from "react-router-dom"; // import Link from react-router-dom

const NavBar = () => {
  // return a nav with a ul and li for each link; notice the use of Link from react-router-dom
  // the to prop is the path you want to go to
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to='/pages/about'>About</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/pages/MarvelGallery'>MarvelGallery</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;