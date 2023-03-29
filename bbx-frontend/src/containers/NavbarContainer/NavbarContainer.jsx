
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarContainer.scss";

const NavbarContainer = () => {
	return (
		<header className="header">
			<h3 className="header__title">BBX</h3>
			<a href="/home">Home</a>
			<a href="/#">Search Beatboxer</a>
			<a href="/create">Add Beatboxer</a>
			<a href="/#">Routines</a>
			<a href="/#">About me</a>
		</header>
	);
}

export default NavbarContainer;