import React ,{useState}from "react";
import "../../styles/index.css";
   
	const TrafficLight= ()=>  {

	const [redColor, setRedColor] = useState("red");
	const [yellowColor, setYellowColor] = useState("yellow");
	const [greenColor, setGreenColor] = useState("green");

	function redLight () {
		if (redColor === "red"){
			setRedColor ("redGlow")
			setYellowColor('yellow')
			setGreenColor('green')
		} else {
			setRedColor("red")
			setYellowColor ("yellow")
			setGreenColor ("green")
		}
	}
	
	function yellowLigth () {

		if (yellowColor === "yellow"){
			setYellowColor ("yellowGlow")
			setRedColor("red")
            setGreenColor ("green")
		} else {
			setRedColor ("red")
			setYellowColor ("yellow")
			setGreenColor  ("green")
		}
	}
	
	function greenLight () {

			if (greenColor === "green"){
				setGreenColor ("greenGlow")
				setRedColor ("red")
				setYellowColor ("yellow")
			} else {
				setRedColor ("red")
				setYellowColor ("yellow")
				setGreenColor("green")
			}
	}
		
		return (
			<>
			<div className= "traffic-light" >
			<div className={redColor} onClick={redLight}></div>
				<div className={yellowColor} onClick={yellowLigth}></div>
				<div className={greenColor} onClick={greenLight}></div>
				</div>
			</>
		);

	};

export default TrafficLight ;
