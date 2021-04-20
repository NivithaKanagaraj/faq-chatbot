import React from "react";
import Faq from "react-faq-component";
import "./styles.css";

const data = {
	title: "Here’s what you should know.",
	rows: [
		{
			title: "Lorem ipsum dolor sit amet,",
			content: "Lorem ipsum dolor sit amet, consectetur ",
		},
		{
			title: "Nunc maximus, magna at ultricies elementum",
			content:
				"Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
		},
		{
			title: "Curabitur laoreet, mauris vel blandit fringilla",
			content:
				"Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
		},
		{
			title: "What is the package version",
			content: "v1.0.5",
		},
	],
};

const styles = {
	bgColor: "white",
	titleTextColor: "black",
	rowTitleColor: "blue",
	rowContentColor: "grey",
	arrowColor: "black",
	titleTextSize: "25px",
};

const config = {
	animate: true,
};

function FAQ() {
	return (
		<div>
			<div className="app">
				<h1>
					<br />
					Frequently Asked Questions
					<br />
					<br />
				</h1>
				<div className="faq">
					<Faq data={data} styles={styles} config={config} />
				</div>
			</div>
		</div>
	);
}

export default FAQ;
