import React, {Component} from "react";
import Message from './Message';

class Email extends Component {
   constructor(props) {
       super(props);
   }    
    
   render () {
       return (
        <div>
           <h1>Testing!!</h1>
           <Message message="Welcome to App js!" name="Ryan" dataName={this.props.dataName}/>
        </div>
       )
   }
};

export default Email;