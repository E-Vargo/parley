import React from 'react';
import {useParams} from 'react-router-dom';


function MyComponent() {
  let { id } = useParams();

  return (<p>{id}</p>);
}

export const Conversation = (props) => {

    return (
        <div>
            <p>{props.title}</p>
        </div>)
        
        
}


