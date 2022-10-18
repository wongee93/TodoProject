import '../App.css';
import TodoBox from '../Component/TodoBox';
import TodoBoxDelete from '../Component/TodoBoxDelete';

const TodoLists = (props) => {

    // console.log(props.todos);

    return (
        <div className='contentWrapper'>
            <div className="todolists">
                {props.deletemode ? <TodoBox todos={props.todos}/> : <TodoBoxDelete/>}
            </div>
        </div>
    )

}

export default TodoLists;