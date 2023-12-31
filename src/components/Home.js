//importing css component
import './Home.css';

//importing component files
import CustomTooltip from './CustomTooltip';
import ReactTooltip from './ReactTooltip';

export default function Home(){
    return(
        <div className="menu">
            <center>
                <h1 className="heading">Tooltip App</h1>
                <div className='tooltip-container'>
                    {/* calling component which handle custom tooltip */}
                    <CustomTooltip message={"This is custom tooltip"} position={"right"}/>
                    {/* calling component which handle react tooltip */}
                    <ReactTooltip message={"This is react tooltip"} position={"right"}/>
                </div>
            </center>
        </div>
    );
}