export const fetchComments = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_COMMENTS"})
        fetch('http://localhost:3001/comments')
        .then(response => response.json())
        .then((responseJSON) => {dispatch({type: "ADD_COMMENTS", comments: responseJSON})})
        
    }
}

export const addComment = comment => {
    return (dispatch) => {
        fetch('http://localhost:3001/comments', {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(comment => dispatch({type: 'ADD_COMMENT', comment: comment}))
    }
}