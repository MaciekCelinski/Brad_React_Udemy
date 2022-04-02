import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext();

export const FeedbackContextProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{ id: 1, rating: 10, text: "From Context" },
		{ id: 2, rating: 9, text: "Lorem ipsum dolor ..." },
	]);

    const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete")) {
			setFeedback((prev) =>
				prev.filter((feedback) => feedback.id !== id)
			);
		}
	};

    const addFeedback = (rating, text) => {
		if (text.trim().length > 10) {
			setFeedback((prev) => [
				{
					id: uuidv4(),
					rating,
					text
				},
				...prev,
			]);
		}
	};

	return (
		<FeedbackContext.Provider value={{ feedback, addFeedback, deleteFeedback }}>
			{children}
		</FeedbackContext.Provider>
	);
};
