import * as React from "react";
//importing css files
import './CustomTooltip.css'

export default function CustomTooltip(props) {
    //expanding prop elements
    const {message, position} = props;
  return (
    //container for custom tooltip
    <div className='Custom-tooltip tooltip-element'>
      <h2>Custom tooltip</h2>
      {/* button to trigger tooltip when hovered */}
      <button className='tooltip-trigger'>Hover me</button>
      {/* span component which acts as a custom tooltip */}
      <span className={`tooltip tooltip-${position}`}>{message}</span>
    </div>
  );
}