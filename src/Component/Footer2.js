import '../App.css';
import cancel from '../icons/cancel.png'
import trashcan from '../icons/trashcan.png'
import { Link } from "react-router-dom"

const Footer2 = (props) => {

    return (
        <div className="footer">
        
        <Link to="/">
            <span className='icons'> <img id='cancel' src={cancel}></img> </span>
        </Link>
       
            <span className='icons'> <img id='trashcan' src={trashcan}></img> </span>

        </div>
    )

}

export default Footer2;