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
        dispatch({type: "LOADING_COMMENTS"})
        fetch('http://localhost:3001/comments', {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(comment => dispatch({type: 'ADD_COMMENT', comment: comment}))
    }
}

export const deleteComment = comment => {
    return (dispatch) => {
        dispatch({type: "LOADING_COMMENTS"})
        fetch(`http://localhost:3001/comments/${comment.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json",  Accept: "application/json"},
            body: JSON.stringify(comment)
        })
        .then(resp => resp.json())
        .then((responseJSON) => {dispatch({type: "DELETE_COMMENT", comment: responseJSON})})
        
    }
}

export const updateComment = comment => {
    return(dispatch) => { 
        dispatch({type: "LOADING_COMMENTS"})
        console.log(comment)
        fetch(`http://localhost:3001/comments/${comment.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json",  Accept: "application/json"},
            body: JSON.stringify(comment)
        })
        .then(resp => resp.json())
        .then((responseJSON) => {dispatch({type: "UPDATE_COMMENT", comment: responseJSON})})
    }
}