import React from "react";
import GolfBallImage from "../../assets/pictures/golf-ball.png";
import "./golfball.css";
const GolfBall = () => {
	return (
		<>
			<img src={GolfBallImage} className="golfball" />
		</>
	);
};

export default GolfBall;
