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
        console.log(e)
        if(e.target.localName === 'button'){
            const item = e.target.parentNode.children[0].textContent;
            setTodos(todos.filter(obj => obj.todo !==item))
            console.log(e.target.localName)
        } 
        if(e.target.localName === 'path'){
            const item = e.target.parentNode.parentNode.parentNode.children[0].textContent;
            setTodos(todos.filter(obj => obj.todo !==item))
            console.log(e.target.localName)
        }
        if(e.target.localName === 'svg'){
            const item = e.target.parentNode.parentNode.children[0].textContent;
            setTodos(todos.filter(obj => obj.todo !==item))
            console.log(e.target.localName)
        }
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
                        <button onClick={handleremove} className='todo-list-item-button'>
                            <svg onClick={handleremove} class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon">
                                <path onClick={handleremove} d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                            </svg>
                        </button>
                    </li>
                    
                    );
                })}
                </ul>
            </div>
        </div>
        );
}

export default TodoPage