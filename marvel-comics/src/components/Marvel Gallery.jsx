import { Link } from "react-router-dom"; // import Link from react-router-dom

const MarvelGallery = () => {
  // return a nav with a ul and li for each link; notice the use of Link from react-router-dom
  // the to prop is the path you want to go to
  return (
    <nav className="MarvelGallery">
      <ul>
        <li><Link to='/pages/MarvelGallery'>MarvelGallery</Link></li>
      </ul>
    </nav>
  )
}

export default MarvelGallery;