import React from 'react';

export const Comment = (props) => {

    return (
        <div>
           {props.commentData.content}<button onClick={() => props.delete(props.commentData)}>X</button>
        </div>)  
}


