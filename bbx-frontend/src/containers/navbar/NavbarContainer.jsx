import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarContainer.scss";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="header">
			<h3 className="header__title">BBX</h3>
			<nav ref={navRef} >
				<a href="/#">Home</a>
				<a href="/#">Search Beatboxer</a>
				<a href="/#">Routines</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;