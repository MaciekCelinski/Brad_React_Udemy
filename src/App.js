// hooks
import { useState } from "react";
// dependencies
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
// routes
import About from "./pages/AboutPage";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete")) {
			setFeedback((prev) =>
				prev.filter((feedback) => feedback.id !== id)
			);
		}
	};

	const addFeedback = (feedback, rating) => {
		setFeedback((prev) => [
			{
				id: uuidv4(),
				rating,
				text: feedback,
			},
			...prev,
		]);
	};

	return (
		<Router>
			<Header text="Feedback UI" />
			<div className="container">
				<Routes>
					<Route
						path="/"
						exact
						element={
							<>
								<FeedbackForm addFeedback={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList
									feedback={feedback}
									handleDelete={deleteFeedback}
								/>
								<AboutIconLink />
							</>
						}
					></Route>
					{/* routing */}
					<Route path="/about" element={<About />} />
					<Route path='/post/*' element={<Post />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
