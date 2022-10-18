import { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios'

const TodoList = () => {

    const [body, setBody] = useState("");

    // 현재 날짜 및 시간
    const todayTime = () => {
        let now = new Date();
        let todayYear = now.getFullYear();
        let todayMonth = now.getMonth() + 1;
        let todayDate = now.getDate();

        return todayYear.toString().substring(2, 4) + '/' + todayMonth + '/' + todayDate
    }

    const date = todayTime();

    const [todoList, setTodoList] = useState([]);
    const readList = async () => {
        const { data } = await axios.get("http://localhost:3001/todolist");
        setTodoList(data);
    };
    useEffect(() => {
        (async () => {
            await readList();
        })();
    }, []);

    // const deleteTodoBtn = async () => {
    //     const { data } = await axios.get("http://localhost:3001/todolist");
    //     console.log(data.id);
    //     await axios.delete(`http://localhost:3001/todolist/${data.id}`);
    //     await readList();
    //   };

const handleSubmit = async () => {
    const { data } = await axios.post("http://localhost:3001/todolist/",
        {
            date,
            body,
            checked: false
        });
    setBody("");
};

console.log(todoList);

return (

    <div className='todolist'>

        <div id='header_date'>22/10/18</div>

        <div className='inputbox'>
            <input id='todo_input' value={body} onChange={(e) => setBody(e.target.value)}></input>
            <button id='add_btn' onClick={handleSubmit}>Add</button>
        </div>

        <ul className='lists'>
            {todoList &&
                todoList.map(todo => {
                    return (
                        <li key={todo.id} className='list'><button className='checked_btn'>✓</button><span id='list_text'>{todo.body}</span><button className='delete_btn2'>X</button></li>
                    )
                })
            }
        </ul>

    </div>
)

}

export default TodoList;