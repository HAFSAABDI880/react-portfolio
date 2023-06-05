import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'employer tracker',
			description:
				'This project allows you to track employers.',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Web APIs',
			],
			github:'https://github.com/HAFSAABDI880/employee-tracker-go/',
		 
		},
	
		{
			name: 'Weather dashboard',
			description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',
			image: 'Weather-Dashboard_.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/HAFSAABDI880/weather-dashboard ',
			
		},
		
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				
			</div>
		</section>
	);
}

export default Portfolio;