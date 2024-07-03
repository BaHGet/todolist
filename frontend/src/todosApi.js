import queryString from 'query-string';
const url = 'https://todolist-great.netlify.app/.netlify/functions/api/todos'


export const getTodos = async (user) => {
    const response = await fetch(url+ '?username=' +user,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'cors': 'no-cors'
            },
        })  
    const res = await response.json()
    return res
}

export const createTodo = async (data) => {
    let santData = {
        username: data.username,
        title: data.title,
        description: data.description,
    }
    const response = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'cors': 'no-cors'
            },
            body: JSON.stringify(santData)
        })  
    const res = await response.json()
    return res
}