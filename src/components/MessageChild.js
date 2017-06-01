import React from "react";

function MessageChild (props) {
    return (
        <div>
            <p>This is the Message Child Component! </p>
            <p>{props.message}</p>
             <p>{props.name}</p>
             <p>Data name: {props.dataName}</p>
             
        </div>
    )
}
export default MessageChild;