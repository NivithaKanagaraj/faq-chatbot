import React from "react";
import Faq from "react-faq-component";
import "./styles.css";

const data = {
	title: "Here’s what you should know.",
	rows: [
		{
			title: "What is Try and Buy Service?",
			content: "This service entitles you to try out your purchases at the time of delivery, pay only for what you like and return the rest on-the-spot. Try and Buy is a paid service, available on most of the products and in 31 Cities, you can enter pin code on product page to check service availability.  ",
		},
		{
			title: "What is Instant Refunds?",
			content:"Upon successful pickup of the return product at your doorstep, Myntra will instantly initiate the refund to your source account or chosen method of refund. Instant Refunds is not available in a few select pin codes and for all self ship returns.",
		},
		{
			title: "Why is my returned product re-shipped?",
			content: "CThis may have happened, if the item you have returned is used, damaged or original tags or MRP tags are missing. In the event that you fail to accept the receipt of the re-shipped item, you shall continue to be not eligible for a refund, and Myntra assumes no liability with respect to the return or refund for the said re-shipped item. For more details, please call our customer care.",
		},
		{
			title: "What is the eligibility criteria to avail EMI option?",
			content: "EMI is available for all products on Myntra except, Jewellery products. Also, the payment option is available only above a minimum order value which varies from bank to bank. For given order value, only the eligible banks will be displayed under the issuing bank list on the EMI payment page.",
		},
	],
};

const styles = {
	bgColor: "white",
	titleTextColor: "black",
	rowTitleColor: " purple",
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
