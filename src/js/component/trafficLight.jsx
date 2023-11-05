import React ,{useState}from "react";
import "../../styles/index.css";
   
const TrafficLight= ()=>  {

	const [redColor, setRedColor] = useState("red");
	const [yellowColor, setYellowColor] = useState("yellow");
	const [greenColor, setGreenColor] = useState("green");

	function redLight () {
	if (redColor === "red"){
		setRedColor ("grey")
	} else {
		setRedColor("red")
		setYellowColor ("grey")
		setGreenColor ("grey")
	}

}
	
	function yellowLigth () {
		
		if (yellowColor === "yellow"){
			setYellowColor ("grey")
		} else {
			setYellowColor ("yellow")
			setRedColor ("grey")
			setGreenColor  ("grey")
		}

	}
	
		function greenLight () {
			
			if (greenColor === "green"){
				setGreenColor ("grey")
			} else {
				setGreenColor("green")
				setRedColor ("grey")
				setYellowColor ("grey")
			}
		}
		
	return (
		<>
		<div className= "Light-container" >
		<button onClick={redLight} style={{backgroundColor:redColor, width:150, height:150, marginTop:10, borderRadius:"50%" }}></button>
		<button onClick={yellowLigth}style={{backgroundColor: yellowColor,width:150,height: 150, marginTop:30,borderRadius:100 }}></button>
		<button onClick={greenLight} style={{backgroundColor: greenColor, width:150,height: 150, marginTop:30,borderRadius:100 }}></button>
		</div>
		</>
	);

};

export default TrafficLight ;
