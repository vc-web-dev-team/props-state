import React from "react";
import MessageChild from "./MessageChild";

function Message (props) {
    return(
       <div>
         <p>your Message Is?</p>
         <p>{props.message}</p>
          <p>{props.name}</p>
         <MessageChild message="This is a rando message!" name={props.name} dataName={props.dataName} />
       </div>
    )
};

export default Message;