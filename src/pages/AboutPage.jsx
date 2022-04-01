import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const About = () => {
	const location = useLocation();
	console.log("location: ", location);
	return (
		<>
			<Card>
				<div className="about">
					<h1>About this project</h1>
					<p>This is a React app called Feedback Project</p>
					<p>Version: 1.0.0</p>
				</div>
				<div className="about-link"></div>
			</Card>
			<div className="about-link">
				<Link to="/">Back to HomePage</Link>
			</div>
		</>
	);
};

export default About;
