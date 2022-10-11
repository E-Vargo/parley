export const fetchConversations = () => {
    return (dispatch) => {
        
        fetch('http://localhost:3001/conversations')
        .then(resp => resp.json())
        .then(conversations => console.log(conversations))
    }
}

export const addConvo = convo => {
    return (dispatch) => {
        fetch('http://localhost:3001/conversations', {
            method: 'POST',
            body: JSON.stringify(convo),
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(conversation => dispatch({type: 'ADD_CONVERSATION', payload: conversation}))
    }
}