import TodoPage from './TodoPage'

const LoginForm = ({userName, setUserName, isloged,setIsloged, todos, setTodos})=>{

    const handleonsubmit = (e) =>{
        e.preventDefault();
        if(e.target[0].value.length !==0 && e.target[0].value[0] !==' '){
            setUserName(e.target[0].value);
            setIsloged(!isloged);
        }
    }

    return(
        isloged ? 
            <TodoPage userName={userName}  todos={todos} setTodos={setTodos} />
        :
            <div className="container">
                <h1>Todo List</h1>
                <form onSubmit={handleonsubmit}>
                    <input type="text" placeholder="User_Name" autoComplete='off' />
                    <input type="text" name="password" placeholder="Comeing Soon" autoComplete='off'/>
                    <br />
                    <button>Log In</button>
                </form>
            </div>
        );
}

export default LoginForm;












