import Temperature from "./Temperature";
import React, { useEffect } from "react";
import { useTheme } from "./useTheme";
import "./theme.css";
import "./styles.css";

export const Toggle = () => {
	const [theme, handleChange] = useTheme("light");

	return (
		<div className="container-switch">
			<input type="checkbox" id="modeToggle" onChange={handleChange} checked={theme === "dark"} />
			<label htmlFor="modeToggle"></label>
		</div>
	);
};

export default function App() {
	useEffect(() => {
		document.title = "Carey spies ⨳ Designer";
	}, []);

	return (
		<div className="App">
			<div className="grid">
				<Toggle />
				<div className="conditions">
					<span className="conditions-rotate h200">
						<Temperature />
					</span>
				</div>
				<div className="location">
					<span className="location-rotate h200"> 47.6061° N, 122.3328° W</span>
				</div>

				<span className="top-spacer" />
				<div className="title h300">
					<h1>Carey Spies</h1>
					<h2 className="secondary">Design Systems</h2>
					<h2 className="secondary">Product Design</h2>
				</div>
				<div className="links">
					<ul className="link-list h200">
						<a href="https://careyspies.design/">work</a>
						<a href="https://www.linkedin.com/in/spiescl/">linkedin</a>
						<a href="https://github.com/careylin/">github</a>
					</ul>
				</div>
				<div className="companies">
					<ul className="companiesList">
						<div className="companyRow">
							<a href="https://www.alltrails.com" className="h400">
								AllTrails
							</a>
							<span className="h200 date">2022–now</span>
						</div>
						<div className="companyRow">
							<a href="https://www.rover.com" className="h400">
								Rover
							</a>
							<span className="h200 date">2018–2022</span>
						</div>
						<div className="companyRow">
							<a href="https://www.redfin.com" className="h400">
								Redfin
							</a>
							<span className="h200 date">2014–2018</span>
						</div>
						<div className="companyRow">
							<a href="https://www.squarespace.com" className="h400 secondary">
								etc...
							</a>
							<span className="h200 date">2011–2014</span>
						</div>
					</ul>
				</div>
				<div className="start-carpet carpet" />
				<div className="end-carpet carpet" />
				<span className="end-spacer" />
			</div>
		</div>
	);
}
