import './index.css';
import image from '../../images/pest control.png';

const Maintenance = () => {

    return(
        <div className="maintenance-box">
            <img src={image} alt = '/' width="100"/>
            <h1>Page Is Under Maintenance</h1>
            <h1>Please Check Back Later!</h1>
        </div>
    )
}

export default Maintenance;