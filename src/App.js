import { useState } from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete")) {
			setFeedback((prev) =>
				prev.filter((feedback) => feedback.id !== id)
			);
		}
	};

	const addFeedback = (feedback) => {
		setFeedback((prev) => [
			...prev,
			{
				id: Math.floor(Math.random() * 1000000),
				rating: 7,
				text: feedback,
			},
		]);
	};

	return (
		<>
			<Header text="Feedback UI" />
			<div className="container">
				<FeedbackForm addFeedback={addFeedback} />
				<FeedbackStats feedback={feedback} />
				<FeedbackList
					feedback={feedback}
					handleDelete={deleteFeedback}
				/>
			</div>
		</>
	);
}

export default App;
