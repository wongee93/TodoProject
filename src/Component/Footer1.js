import '../App.css';
import plus from '../icons/plus.png'
import trashcan from '../icons/trashcan.png'
import { Link } from "react-router-dom"

const Footer1 = (props) => {

    function DeleteMode() {
        props.setDeletemode(!props.deletemode);
        console.log(props.deletemode);
    }

    return (
        <div className="footer">
        
        <Link to="/newtodo">
            <span className='icons'> <img id='plus' src={plus}></img> </span>
        </Link>
       
            <span className='icons' onClick={DeleteMode}> <img id='trashcan' src={trashcan}></img> </span>

        </div>
    )

}

export default Footer1;