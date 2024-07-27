import { createUser, getUser } from "../APIs/userApi";

export const Signup = async(
    userName, email, password,
    setIsThereIsError, setError, setValidated, setLoading
) =>{
    if(userName && email && password ){
        const data = {
            username: userName.toLowerCase(),
            email: email,
            password: password
        }
        if(error === 'Wrong Password'){
            if(await createUser(data,setError)){
                setIsThereIsError(false)
                window.location.reload();
            }else{
                setIsThereIsError(true)
            }
        }else{
            setIsThereIsError(true)
            setError("Username already exists");
            setValidated(false);
        }
        
        setLoading(false)
    }else{
        setLoading(false)
    }
}

export const Login = async(
    userName, password,
    setSigned, setUser, setIsThereIsError, setError, setValidated, setLoading
) =>{
    if(userName.length > 0 && password.length > 0){
        const data = {
            username: userName.toLowerCase(),
            password: password
        }
        let res = await getUser(data,setError)
        if(res){
            setSigned(true);
            localStorage.setItem('user', JSON.stringify({ username: res.username, email: res.email, created_at: res.created_at }));
            setUser({ username: res.username, email: res.email, created_at: res.created_at })
            setIsThereIsError(false)
        }else{
            setIsThereIsError(true)
            setValidated(false);
        }
        setLoading(false)
    }else{
        setLoading(false)
    }
}