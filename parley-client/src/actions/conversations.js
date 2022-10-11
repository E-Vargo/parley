export const fetchConversations = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_CONVERSATIONS"})
        fetch('http://localhost:3001/conversations')
        .then(response => response.json())
        .then((responseJSON) => {dispatch({type: "ADD_CONVERSATIONS", conversations: responseJSON})})
        
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
        .then(conversation => dispatch({type: 'ADD_CONVERSATION', conversation: conversation}))
    }
}