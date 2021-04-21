import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="/">Home</Navbar.Brand>
			</Navbar>
		</div>
		
	);
}

export default Header;
