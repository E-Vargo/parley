export const fetchComments = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/comments')
        .then(resp => resp.json())
        .then(comments=> console.log(comments))
    }
}