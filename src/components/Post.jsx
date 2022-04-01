import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

const Post = () => {

	const status = 200;
	if (status === 404) <Navigate to="/not-found" />;

	const navigate = useNavigate();
    
	const ClickHandler = () => {
		console.log("Hello");
		navigate("/about", {state:{id:1,name:'sabaoon'}});
	};

	return (
		<div>
			<h1>Post</h1>
			<button onClick={ClickHandler}>Click</button>
            <Routes>
                <Route path="/show" element={<h1>123</h1>}/>
            </Routes>
		</div>
	);
};

export default Post;
