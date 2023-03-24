
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarContainer.scss";

function Navbar() {
	return (
		<header className="header">
			<h3 className="header__title">BBX</h3>
			<a href="/">Home</a>
			<a href="/#">Search Beatboxer</a>
			<a href="/create">Add Beatboxer</a>
			<a href="/#">Routines</a>
			<a href="/#">About me</a>
		</header>
	);
}

export default Navbar;