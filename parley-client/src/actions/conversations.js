export const fetchConversations = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/conversations')
        .then(resp => resp.json())
        .then(conversations => console.log(conversations))
    }
}