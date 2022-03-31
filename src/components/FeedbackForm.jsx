import { useState } from "react";

//components
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ addFeedback }) => {
	const [text, setText] = useState("");
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState("");

	const handleTextChange = (e) => {
		if (text === "") {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== "" && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage("Text must be at least 10 characters");
		} else {
			setBtnDisabled(false);
			setMessage(null);
		}
		setText(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			addFeedback(text, +rating);
		}

		setText("");
	};

	return (
		<Card>
			<form onSubmit={submitHandler}>
				<h2>Set your rating</h2>
				<RatingSelect
					select={(rating) => {
						setRating(rating);
					}}
				/>
				<div className="input-group">
					<input
						onChange={handleTextChange}
						type="text"
						placeholder="Write a review"
						value={text}
					/>
					<Button
						type="submit"
						version="secondary"
						isDisabled={btnDisabled}
					>
						Send
					</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
};

export default FeedbackForm;
