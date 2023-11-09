import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import TrafficLight from "./trafficLight";

//create your first component
const Home = () => {
	return(
		<div className="traffic-light-Container">
			<div className="traffic-light-pole"></div>
			<TrafficLight/>	
		</div>
	);
};

export default Home;
