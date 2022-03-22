import PropTypes from "prop-types";

function Header({ text,bgColor }) {

  const headerStyle = {
    backgroundColor: bgColor
  }

	return (
		<header style={headerStyle}>
			<div className="container">
				<h1>{text}</h1>
			</div>
		</header>
	);
}
export default Header;

Header.defaultProps = {
	text: "Welcome",
  bgColor: "#ff6a95"
};

Header.propTypes = {
	text: PropTypes.string.isRequired,
  bgColor: PropTypes.string
};
