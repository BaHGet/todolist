const TodoPage =({userName, todos, setTodos}) =>{
    let i =-1;

    const handlesubmit =(e) =>{
        e.preventDefault();
        const tergetInput=  e.target.parentNode[0];
        if(tergetInput !== undefined){
            if(tergetInput.value.length !==0 && tergetInput.value[0] !==' '){
                setTodos([...todos, {todo:tergetInput.value}])
                tergetInput.value= '';
            }
        }else{
            const tergetInput = e.target[0];
            if(tergetInput.value.length !==0 && tergetInput.value[0] !==' '){
                setTodos([...todos, {todo:tergetInput.value}])
                tergetInput.value= '';
            }
        }
        
    }

    const handleremove = (e) =>{
        e.preventDefault();
        const item = e.target.parentNode.children[0].textContent;
        setTodos(todos.filter(obj => obj.todo !==item))
    }

    return (
        <div className='page-container' onSubmit={handlesubmit}>
            <h1 className='todo-list'>Todo List</h1>
            <h3 className='todo-list'>{userName}'s todo list</h3>
            <form className='todo-list'>
                <input type='text' className='todo-list-input' placeholder="Add your new todo" />
                <input type='button' className='todo-list-button' placeholder="add" onClick={handlesubmit} />
            </form>
            <div>
                <ul className='todo-list-items'>
                {todos.map((todo) =>{
                    i++;
                    return (
                    <li key={i} className='todo-list-item'>
                        <h2>{todo.todo}</h2>
                        <button onClick={handleremove} className='todo-list-item-button'></button>
                    </li>
                    
                    );
                })}
                </ul>
            </div>
        </div>
        );
}

export default TodoPage