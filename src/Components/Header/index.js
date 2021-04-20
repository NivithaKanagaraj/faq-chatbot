import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./styles.css";

function Header() {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#">FAQ</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
}

export default Header;
