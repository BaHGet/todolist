const url = 'http://localhost:8888/.netlify/functions/api/user'


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
        console.error({
            message: res.message,
            status: response.status,
            location: "getUser()"
        })
        setError(res.message)
        return false
    }
    return true 
} 

