export const addUser = user => {
    return dispatch => {
        
        fetch('http://localhost:3001/api/v1/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json', Accept: 'application/json'}
        })
        .then(resp => resp.json())
        .then((data) => {
        localStorage.setItem("jwt", data.jwt);
        dispatch({type: 'ADD_USER', payload: data.user}) 
    })
        
    }
}