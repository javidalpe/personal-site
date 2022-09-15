import React from 'react';

import Timeline from "./Timeline";
import {grid, item} from "./utils";

let BLUE_BACKGROUND = "#203d65";
let WHITE_BACKGROUND = "#d4f1fc";

const experience = [
	{
		when: new Date(2020, 7, 1),
		name: "Frontend Engineer",
		description: "Facebook",
		where: "Menlo Park, California",
		url: "https://undefinedlabs.com/",
		what: "React, Flux, Relay"
	},
	{
		when: new Date(2019, 2, 1),
		name: "Senior Frontend Engineer",
		description: "Undefined Labs",
		where: "Madrid, Spain",
		url: "https://undefinedlabs.com/",
		what: "React, GraphQL, Apollo"
	}
	,
	{
		when: new Date(2017, 1, 1),
		name: "Lead Software Engineer",
		description: "Sngular People",
		where: "Madrid, Spain",
		url: "https://www.sngular.com",
		what: "React, Redux, RxJS"
	}
	,
	{
		when: new Date(2015, 6, 1),
		name: "Lead Software Engineer",
		description: "Excelend",
		where: "Madrid, Spain",
		url: "https://www.excelend.com/",
		what: "C#, Azure Pipelines, ASP"
	}
	,
	{
		when: new Date(2014, 1, 1),
		name: "Software Engineer",
		description: "Tuenti",
		where: "Madrid, Spain",
		url: "https://tuenti.com",
		what: "Java, Android, Javascript"
	}, {
		when: new Date(2011, 6, 1),
		name: "Software Engineer Internship",
		description: "Kuapay LLC",
		where: "Los Angeles, US",
		what: "WindowsPhone, C#, Javascript"
	}];

const sideProjects = [
	{
		when: new Date(2020, 7, 1),
		name: "Cognition",
		description: "Run cognitive experiments online.",
		where: "Menlo Park, California",
		url: "https://www.cognition.run/",
		what: "React, Laravel, OAuth",
	},
	{
		when: new Date(2020, 4, 1),
		name: "PicTips",
		description: "Find your best 4 pictures for online dating",
		where: "Menlo Park, California",
		url: "https://pictips.me/",
		what: "React, Firebase, Google Vision API, Stripe",
		died: true,
	},
	{
		when: new Date(2019, 11, 1),
		name: "QRPayments",
		description: "Accept in-person payments without hardware",
		where: "Madrid, Spain",
		url: "https://qrpayments.app/",
		what: "React, Firebase, Stripe",
		died: true,
	},
	{
		when: new Date(2018, 1, 1),
		name: "Gramatica",
		description: "Grammarly for Spanish",
		where: "Madrid, Spain",
		what: "React, Google Chrome Extensions",
		died: true,
	},
	{
		when: new Date(2017, 5, 1),
		name: "Infoboe",
		description: "Search engine for the Official Gazettes of Spain",
		where: "Madrid, Spain",
		url: "https://www.infoboe.com",
		what: "Laravel, React, Algolia",
		died: true,
	},

	{
		when: new Date(2016, 1, 1),
		name: "Premy",
		description: "Pay to follow Instagram private accounts",
		where: "Madrid, Spain",
		what: "Laravel, Stripe, Instagram API",
		died: true,
	},
	{
		when: new Date(2013, 6, 1),
		name: "eStela",
		description: "Mobile GPS tracking for sailing",
		where: "Madrid, Spain",
		url: "https://www.estela.co",
		what: "Laravel, React, Google Maps"
	}, {
		when: new Date(2011, 12, 1),
		name: "Tawea",
		description: "A Facebook chat for every website",
		where: "Almería, Spain",
		what: "CodeIgniter, Javascript, Google Extensions",
		died: true,
	}];

function App() {


	return (
		<div style={grid("auto auto auto / 50% 50%")}>
			<div style={{...item("1 / 1 / 2 / 2"), backgroundColor: WHITE_BACKGROUND}}/>
			<div style={{...item("1 / 2 / 2 / 3"), backgroundColor: BLUE_BACKGROUND}}/>

			<img src="sun-moon.svg" alt="logo" style={{maxWidth: 640, justifySelf: "center", ...item("1 / 1 / 2 / 3")}}/>

			<h1 style={{
				...item("1 / 1 / 2 / 3"), margin: "auto",
				background: "rgba(250,250,250,0.9)",
				padding: 10
			}}>Hello, I'm Javier</h1>


				<div style={{
					...item("2 / 1 / 3 / 2"),
					backgroundColor: WHITE_BACKGROUND,
					color: "#333",
					textAlign: "right",
					paddingRight: 30
				}}>
					<h2 style={{marginTop: 0, lineHeight: "30px"}}>A Software Engineer at Day</h2>
					<p><i>Learning from others</i></p>
				</div>

				<div style={{
					...item("2 / 2 / 3 / 3"),
					backgroundColor: BLUE_BACKGROUND,
					color: "#dedede",
					fontFamily: "'Inconsolata', monospace",
					paddingLeft: 30,
				}}>
					<h2 style={{ marginTop: 0, lineHeight: "30px"}}>An Indie Hacker at Night</h2>
					<p><i>Experimenting with technology</i></p>
				</div>

				<div style={{
					...item("3 / 1 / 4 / 2"),
					backgroundColor: WHITE_BACKGROUND,
					color: "#333",
					textAlign: "right",
					borderRight: "4px solid #325f9f"
				}}>
					<Timeline events={experience} leftSide/>
				</div>

				<div style={{
					...item("3 / 2 / 4 / 3"),
					backgroundColor: BLUE_BACKGROUND,
					color: "#dedede",
					borderLeft: "4px solid #325f9f",
					fontFamily: "'Inconsolata', monospace"
				}}>
					<Timeline events={sideProjects}/>
				</div>
		</div>
	);
}

export default App;
