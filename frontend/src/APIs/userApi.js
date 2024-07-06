import queryString from 'query-string';
const url = 'https://todolist-great.netlify.app/.netlify/functions/api/user'


export const createUser = async (data, setError) => {
    const body = JSON.stringify(data)
    
    const response = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        })
    const res = await response.json()
    const status = response.status
    if(status === 400){
        setError(res.message)
        return false
    }
    return true 
} 

export const getUser = async (data,setError) => {
    const response = await fetch(url+ '?' +queryString.stringify(data),
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'cors': 'no-cors'
            },
        })  
    const res = await response.json()
    const status = response.status
    if(status === 400){
        setError(res.message)
        return false
    }
    return  res
}

