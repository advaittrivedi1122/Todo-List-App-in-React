import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./MyComponents/Header";		// rfc
import {Todos} from "./MyComponents/Todos";		// rafc
import {Footer} from "./MyComponents/Footer";	// rafc
import {AddTodo} from "./MyComponents/AddTodo";	// rafc
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
  

function App() {
	let initTodo;
	if(localStorage.getItem("todos") === null){
		initTodo = [];
	}
	else{
		initTodo = JSON.parse(localStorage.getItem("todos"));
	}

	const onDelete = (todo)=>{
		console.log("I am on delete of todo",todo);

		updateTodos(todos.filter((e)=>{
			if(e.sno > todo.sno){
				e.sno--;
			}
			return e!==todo;
		}));
		// localStorage.removeItem("todos",JSON.stringify(todos));
		// localStorage.setItem("todos",JSON.stringify(todos));
	};

	const addTodo = (title,desc)=>{
		let sno;
		if(todos.length==0){
			sno=1;
		}
		else{
			sno = todos[todos.length-1].sno + 1;
		}
		const myTodo = {
			sno: sno,
			title: title,
			desc: desc
		};
		updateTodos([...todos,myTodo]);
		console.log(myTodo);
		// localStorage.removeItem("todos",JSON.stringify(todos));

		
	};
	
	const [todos, updateTodos] = useState(initTodo);
	useEffect(() => {
		localStorage.setItem("todos",JSON.stringify(todos));
	}, [todos]);
	return (
		<>
		<Header title="My Todos List"/>
		<AddTodo addTodo={addTodo} />
		<Todos todos={todos} onDelete={onDelete}/>
		<Footer/>
		</>
  );
}

export default App;
