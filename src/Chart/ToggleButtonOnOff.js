import React, { Component } from 'react'
import "./ToggleButtonOnOff.css"

export default class ToggleButtonOnOff extends Component {
    constructor() {
        super();
        this.state = {
            isclicked: false
        }
    }
    render() {
        return (
                            
                
                <span id="toggleBtn">
                <input type="checkbox" id="checkbox-input"/>
                        <label htmlFor="checkbox-input" className="round-slider-container">
                    <span>On</span>
                    <span>Off</span>
                            <span className="round-slider"></span>
                </label>
            </span>
            
           

      
    )
    }
}
