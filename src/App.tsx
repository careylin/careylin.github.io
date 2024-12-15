import Temperature from "./Temperature";
import React, { useEffect } from "react";
import { useTheme } from "./useTheme";
import "./theme.css";
import "./styles.css";
import { Routes, Route, Link } from 'react-router-dom';
import Quest from "./pages/Quest";

export const Toggle: React.FC = () => {
	const [theme, handleChange] = useTheme("light");

	return (
		<div className="container-switch">
			<input type="checkbox" id="modeToggle" onChange={handleChange} checked={theme === "dark"} />
			<label htmlFor="modeToggle"></label>
		</div>
	);
};

const App: React.FC = () => {
	useEffect(() => {
		document.title = "Carey spies ⨳ Designer";
	}, []);

	return (
		<Routes>
			<Route path="/" element={
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
						<div className="title h200">
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
							<div className="projectRow">
									<Link to="/quest" className="h300">
										Quest
									</Link>
									<span className="h200 date">Presently</span>
							</div>
							<div className="projectRow">
								<a href="https://www.alltrails.com" className="h300">
									Denali Design System
								</a>
								<span className="h200 date">Presently</span>
							</div>
							<div className="projectRow">
								<a href="https://www.alltrails.com" className="h300">
									AllTrails Denali Launch
								</a>
								<span className="h200 date">2022</span>
							</div>
							<div className="projectRow">
								<a href="https://www.alltrails.com" className="h300">
									Rover Sitter Profile
								</a>
								<span className="h200 date">2021</span>
							</div>
							<div className="projectRow">
								<a href="https://www.alltrails.com" className="h300">
									Sitter Tools
								</a>
								<span className="h200 date">2021</span>
							</div>
							<div className="projectRow">
								<a href="https://www.alltrails.com" className="h300">
									Kibble Design System
								</a>
								<span className="h200 date">2020</span>
							</div>
							</ul>
						</div>
						<div className="start-carpet carpet" />
						<div className="end-carpet carpet" />
						<span className="end-spacer" />
					</div>
				</div>
			} />
			<Route path="/quest" element={<Quest />} />
		</Routes>
	);
};

export default App;
