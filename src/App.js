import React,{useState} from 'react'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>Todo List</h1>
      </div>
      <div className="subHeading">
        <h3>Whoop, it's Wednesday☕ </h3>
      </div>
      <div className="input">
        <input value={todo} onChange={e=>{setTodo(e.target.value)}} type="text" placeholder="Add item..." />
        <i onClick={()=>{setTodos([...todos,{id:Date.now(), text:todo, status:false}])}} className="icon-add fas fa-plus"></i>
      </div>
      <div className="todos">
      {
          todos.map((obj)=>{
            return(
     
        <div className="todo">
            <div className="left">
              <input onChange={
                  (e)=>{
                    console.log(e.target.value)
                    console.log(obj)
                    setTodos(todos.filter(obj2=>{
                        if (obj2.id===obj.id){
                          if(obj2.status==false){
                            obj2.status=true
                          }else{
                            obj2.status=false
                          }                     
                        }
                        return obj2
                    }))
                  }
              } value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
            </div>
        <div className="right">
          <i onClick={()=>{
            let temp=[]
            todos.map(obj2=>{
              if(obj2.id!==obj.id){ 
                temp.push(obj2)
              }
            })
            setTodos([...temp])
          }} className="icon-close fas fa-times"></i>
        </div>
        </div>
     
          )
        })  
      }

      {
        todos.map((item)=>{
          if(item.status===true){
            return(<p style={{color:"#fff",}}>{item.text} ✔</p>) 
          }else{
            return(<p style={{color:"#fff",}}>{item.text} ❌</p>);
          }    
        })
      }

      </div>
    </div>
  );
}

export default App;

