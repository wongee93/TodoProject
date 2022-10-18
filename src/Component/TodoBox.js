import '../App.css';
import { Link } from "react-router-dom"

const TodoBox = (props) => {

    // console.log(props.todos);

    return (
        <div className="todobox">

            <Link to="/todolist" className='boxlink'>
                <div className='box'>
                    <div id='box_date'>22/10/18</div>
                    <div id='todo'>TO DO</div>
                </div>
            </Link>

        </div>
    )

}

export default TodoBox;