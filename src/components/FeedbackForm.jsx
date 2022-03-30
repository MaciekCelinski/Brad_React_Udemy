import { useState } from "react";
import Card from "./shared/Card";

const FeedbackForm = ({ addFeedback }) => {
	const [text, setText] = useState("");

	const handleTextChange = (e) => {
		setText(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		addFeedback(text);
	};

	return (
		<Card>
			<form onSubmit={submitHandler}>
				<h2>Your rating:</h2>
				<div className="input-group">
					<input
						onChange={handleTextChange}
						type="text"
						placeholder="Write a review"
						value={text}
					/>
					<button type="submit">
						Send
					</button>
				</div>
			</form>
		</Card>
	);
};

export default FeedbackForm;
