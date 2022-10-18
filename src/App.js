import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Footer1 from './Component/Footer1';
import Footer2 from './Component/Footer2';
import TodoLists from './Pages/TodoLists';
import TodoList from './Pages/TodoList';
import NewTodo from './Pages/NewTodo';
import { useState } from 'react'
import useFetch from './util/useFetch';


function App() {

  // const [todos, isPending, error] = useFetch("http://localhost:3001/todolist/");

  // console.log(todos);

  // 휴지통 아이콘 - 삭제모드 관리
  let [deletemode, setDeletemode] = useState(true);

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<TodoLists deletemode={deletemode}/>} />
          <Route path="/todolist" element={<TodoList/>} />
          <Route path="/newtodo" element={<NewTodo/>} />

        </Routes>
        
        <Routes>

          <Route path='/' element={<Footer1 deletemode={deletemode} setDeletemode={setDeletemode}/>}/>
          <Route path='/todolist' element={<Footer2 />}/>
          <Route path='newtodo' element={<Footer2/>}/>

        </Routes>
      
      </BrowserRouter>
    </div>

  );
}

export default App;
