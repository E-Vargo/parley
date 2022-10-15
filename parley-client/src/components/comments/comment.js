import React from 'react';
import {useState} from 'react';

export const Comment = (props) => {
    
    const [loading, setLoading] = useState(false);
    if (loading === false){
    return (
        
        <div>
           {props.commentData.content}<button onClick={() => setLoading(true)}>Edit</button><button onClick={() => props.delete(props.commentData)}>X</button>
        </div>)  } else if (loading === true) {
            return (
            <div>
                    1999
            </div>)
        }
}


