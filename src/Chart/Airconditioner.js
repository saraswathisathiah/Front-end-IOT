import { useState } from "react";
import "./Airconditioner.css"
import ToggleButtonOnOff from "./ToggleButtonOnOff";

const data = {
    "initial": {
        "unit": "GB",
        "value": 2
    },
    "remaining": {
        "unit": "GB",
        "value": 0.9
    },
    "type": "Airconditioner",
};

export default function SemiCircleChart({ min, max, value }) {
    var [temperature, setTemperature] = useState(value);
    const angle = (temperature / max) * 180;
    const style = { '--angle': angle + 'deg' };
   

    const increaseTemperature = () => {
        // const newTemperature = temperatureValue + 1;
        // setTemperatureValue(newTemperature);

        // if (newTemperature >= 15) {
        //     setTemperatureColor('hot');
        // }
       temperature=temperature+1;
        setTemperature(temperature);
        if(temperature>30)
        {
            alert("Max temperature is 30° C ");
            temperature = temperature - 1;
            setTemperature(temperature);
        }
    };

    const decreaseTemperature = () => {
        // const newTemperature = temperatureValue - 1;
        // setTemperatureValue(newTemperature);
        // if (newTemperature < 15) {
        //     setTemperatureColor('cold');
        // }
        temperature = temperature - 1;
        setTemperature(temperature);
        if (temperature <15) {
            alert("Please watch out for temperature.Might Freeze");
            temperature = temperature + 1;
            setTemperature(temperature);
        }
    };

    return (
        <div class="sc-gauge">
            <span  className="sc-value1" >&nbsp;&nbsp;Air conditioner</span>
          
            <span className="sc-value2" >&nbsp;&nbsp;&nbsp;Active for 3 Hours</span>
            <span> <ToggleButtonOnOff /> </span>
            <div class="sc-background">
                <div class="sc-percentage" style={style}></div>
              

                <div class="sc-mask"></div>
                <span class="sc-value3">A/C Temperature</span>
               
                <span class="sc-value">
                    <button className="btnID" onClick={increaseTemperature}>+</button>&nbsp;&nbsp;
                    {temperature}<span>° C</span>  &nbsp;<button className="btnID" onClick={decreaseTemperature}>-</button></span>
            </div>
            <span class="sc-min">{min}</span>
            <span class="sc-max">{max}</span>
        </div>)
}