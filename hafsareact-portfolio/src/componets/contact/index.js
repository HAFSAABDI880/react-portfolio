import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/recent-photo.jpg')}
					alt="about-me"
					className="photo"
				/>
			
			<div>
				<p>
                I am an aspiring full stack web developer looking to gain a software
                engineering apprenticeship. I have been enrolled in the University of
               Birmingham's full-stack development bootcamp.I have learnt front end
              and back end technologies through a dynamic full stack curriculum,
              including HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js,
               React.js, Node.js, Database Theory, MongoDB, MySQL, Git, and more. 
				
                of a fast-paced, quality-driven team to build better
					experiences on the web.
				</p>
			</div>
		</section>
	);
}

export default About;
