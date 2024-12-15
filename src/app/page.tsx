'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Temperature from "./components/Temperature/Temperature";
import Link from 'next/link';
import { useState } from 'react'
import { Toggle } from './components/Toggle/Toggle';

export default function Home() {
	const [state, setState] = useState()

	return (
		<div className={styles.app}>
			<div className={styles.grid}>
				<Toggle />
				<div className={styles.conditions}>
					<span className={styles.rotate}>
						<Temperature />
					</span>
				</div>
				<div className={styles.location}>
					<span className={styles.rotate}> 47.6061° N, 122.3328° W</span>
				</div>
				<span className={styles.topSpacer} />
				<div className={styles.title}>
					<h1 className={styles.primary}>Carey Spies</h1>
					<h2 className={styles.secondary}>Design Systems</h2>
					<h2 className={styles.secondary}>Product Design</h2>
				</div>
				<div className={styles.links}>
					<ul className={styles.linkList}>
						<a href="https://careyspies.design/">work</a>
						<a href="https://www.linkedin.com/in/spiescl/">linkedin</a>
						<a href="https://github.com/careylin/">github</a>
					</ul>
				</div>
				<div className={styles.companies}>
					<ul className={styles.companiesList}>
						<div className={styles.projectRow}>
							<Link href="/projects/quest" className={styles.h300}>
								Quest
							</Link>
							<span className={styles.date}>Presently</span>
						</div>
						<div className={styles.projectRow}>
							<Link href="/projects/denali" className={styles.h300}>
								Denali Design System
							</Link>
							<span className={styles.date}>Presently</span>
						</div>
						<div className={styles.projectRow}>
							<Link href="/projects/denali-launch" className={styles.h300}>
								AllTrails Denali Launch
							</Link>
							<span className={styles.date}>2022</span>
						</div>
						<div className={styles.projectRow}>
							<Link href="/projects/sitter-profile" className={styles.h300}>
								Rover Sitter Profile
							</Link>
							<span className={styles.date}>2021</span>
						</div>
						<div className={styles.projectRow}>
							<Link href="/projects/sitter-tools" className={styles.h300}>
								Sitter Tools
							</Link>
							<span className={styles.date}>2021</span>
						</div>
						<div className={styles.projectRow}>
							<Link href="/projects/kibble" className={styles.h300}>
								Kibble Design System
							</Link>
							<span className={styles.date}>2020</span>
						</div>
					</ul>
				</div>
				<div className={styles.startCarpet} />
				<div className={styles.endCarpet} />
				<span className={styles.endSpacer} />
			</div>
		</div>
	);
}
