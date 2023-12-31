import "react-tooltip/dist/react-tooltip.css";
//importing Tooltip
import { Tooltip } from "react-tooltip";

export default function ReactTooltip(props) {
    //expanding prop elements
    const {position, message} = props;
    return (
        //container for react tooltip
        <div className='React-tooltip tooltip-element'>
            <h2>React tooltip</h2>
            {/* button to trigger tooltip when hovered */}
            <button className='tooltip-trigger'
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={`${message}`}
                  data-tooltip-place={`${position}`}>
                Hover me
            </button>
            {/* react tooltip component */}
            <Tooltip id="my-tooltip" />
        </div>
      );
}