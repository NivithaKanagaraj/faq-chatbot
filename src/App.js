import "./App.css";
import FAQ from "./Components/FAQ";
import Header from "./Components/Header";
import tawkTo from "tawkto-react";
import React, { useEffect } from "react";

const tawkToPropertyId = "607eef995eb20e09cf34dbdd";

// Direct Chat Link
// https://tawk.to/chat/tawkToPropertyId/tawkToKey

const tawkToKey = "1f3ntfsa6";

function App() {
	useEffect(() => {
		tawkTo(tawkToPropertyId, tawkToKey);
	}, []);
	return (
		<div className="App">
			<Header />
			<FAQ />
		</div>
	);
}

export default App;
