import { Link } from "react-router-dom"; // import Link from react-router-dom

const NavBar = () => {
  // return a nav with a ul and li for each link; notice the use of Link from react-router-dom
  // the to prop is the path you want to go to
  return (
      <nav className="nav-bar">
        <ul className="nav-link-container">
          <li className="nav-link"><Link to='/'>Home</Link></li>
          <li className="nav-link"><Link to='/pages/about'>About</Link></li>
          <li className="nav-link"><Link to='/pages/MarvelGallery'>Marvel Gallery</Link></li>
        </ul>
      </nav>
  )
}

export default NavBar;