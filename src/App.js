// dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
// context
import { FeedbackContextProvider } from "./context/FeedbackContext";

// routes
import About from "./pages/AboutPage";

function App() {

	return (
		<FeedbackContextProvider>
			<Router>
				<Header text="Feedback UI" />
				<div className="container">
					<Routes>
						<Route
							path="/"
							exact
							element={
								<>
									<FeedbackForm />
									<FeedbackStats/>
									<FeedbackList />
									<AboutIconLink />
								</>
							}
						></Route>
						{/* routing */}
						<Route path="/about" element={<About />} />
						<Route path="/post/*" element={<Post />} />
					</Routes>
				</div>
			</Router>
		</FeedbackContextProvider>
	);
}

export default App;
