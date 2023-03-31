
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarContainer.scss";
import { Link } from "react-router-dom";

const NavbarContainer = () => {
	return (
		<header className="header">
			<h3 className="header__title">BBX</h3>
			<Link to={"/home"}>Home</Link>
			<Link to={"/search"}>Search Beatboxer</Link>
			<Link to={"/create"}>Add Beatboxer</Link>
			<Link to={"/routines"}>Routines</Link>
			<Link to={"/#"}>About me</Link>
		</header>
	);
}

export default NavbarContainer;