import '../App.css';

const NewTodo = (props) => {

    return(

        <div className='todolist'>

            <div id='header_date'>22/10/07</div>

            <div className='inputbox'>
                <input id='todo_input'></input>
                <button id='add_btn'>Add</button>
            </div>

            <ul className='lists'>
                {/* <li className='list'><button className='checked_btn'>✓</button><span id='list_text'>React 강의 듣기</span><button className='delete_btn2'>X</button></li>
                <li className='list'><button className='checked_btn'>✓</button><span id='list_text'>회고 블로그 작성하기</span><button className='delete_btn2'>X</button></li>
                <li className='list'><button className='checked_btn'>✓</button><span id='list_text'>Redux 개념학습</span><button className='delete_btn2'>X</button></li>                 */}
            </ul>

        </div>
    )

}

export default NewTodo;