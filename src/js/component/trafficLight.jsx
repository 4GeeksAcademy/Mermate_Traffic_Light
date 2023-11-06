import React ,{useState}from "react";
import "../../styles/index.css";
   
const TrafficLight= ()=>  {

	const [redColor, setRedColor] = useState("red");
	const [yellowColor, setYellowColor] = useState("yellow");
	const [greenColor, setGreenColor] = useState("green");

	function redLight () {
	if (redColor === "red"){
		setRedColor ("redGlow")
	} else {
		//setRedColor("red")
		setYellowColor ("yellow")
		setGreenColor ("green")
	}

}
	
	function yellowLigth () {
		if (yellowColor === "yellow"){
			setYellowColor ("yellowGlow")
		} else {
			//setYellowColor ("yellow")
			setRedColor ("red")
			setGreenColor  ("green")
		}
}
	
		function greenLight () {
			if (greenColor === "green"){
				setGreenColor ("greenGlow")
			} else {
				//setGreenColor("green")
				setRedColor ("red")
				setYellowColor ("yellow")
			}
		}
		
	return (
		<>
		<div className= "Light-container" >
		<button className={redColor} onClick={redLight}></button>
			<button className={yellowColor} onClick={yellowLigth}></button>
			<button className={greenColor} onClick={greenLight}></button>
			</div>
		</>
	);

};

export default TrafficLight ;
