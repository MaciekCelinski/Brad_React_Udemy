import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext();

export const FeedbackContextProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, rating: 10, text: "From Context" },
    { id: 2, rating: 9, text: "Lorem ipsum dolor ..." },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  // update feedback
  const updateFeedback = (id, rating, text) => {
    const updFeedback = { id, rating, text };

    setFeedback((prev) => {
      return prev.map((feedback) => {
        if (feedback.id === id) {
          return updFeedback;
        } else {
          return feedback;
        }
      });
    });
  };

  // edit single feedback
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  // delete a single feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback((prev) => prev.filter((feedback) => feedback.id !== id));
    }
  };

  // add a new feedback
  const addFeedback = (rating, text) => {
    if (text.trim().length > 10) {
      setFeedback((prev) => [
        {
          id: uuidv4(),
          rating,
          text,
        },
        ...prev,
      ]);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
