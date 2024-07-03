import queryString from 'query-string';
const url = 'http://localhost:8888/.netlify/functions/api/todos'


export const getTodos = async (user) => {
    const response = await fetch(url+ '?username=' +user,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'mode': 'no-cors'
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

export const updateTodo = async (username, title, newTitle, newdDescription, newPriority) => {
    let santData = {
        username: username,
        title: title,
        newTitle: newTitle,
        newdDescription: newdDescription,
        newPriority: newPriority
    }
    const response = await fetch(url,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'cors': 'no-cors'
            },
            body: JSON.stringify(santData)
        })  
    const res = await response.json()
    return res
}

export const deleteTodo = async (username, title) => {
    const response = await fetch(url,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'cors': 'no-cors'
            },
            body: JSON.stringify({username, title})
        })  
    const res = await response.json()
    return res 
}