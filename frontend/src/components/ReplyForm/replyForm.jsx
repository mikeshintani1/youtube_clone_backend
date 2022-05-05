import {} from 'react-router-dom'
import React, { useState } from 'react';


const CreateReply = (props) => {

    const [name, setName] = useState('');
    const [reply, setReply] = useState('');

    function handleReply(event) {
        event.preventDefault();
        let newReply = {
            name: name,
            reply: reply
        };
        console.log(newReply);
        props.createNewReplyProperty(newReply);
    }

    return (
        <form onSubmit={handleReply} className='reply_form'>
            <div className='reply_form'>
                <label>Name</label>
                <input type='text' className='formo-control' value={name} onChange = {(event) => setName(event.target.value)}/> 
            </div>
            <div className='reply_form'>
                <label>REPLY</label>
                <input type='text' className='formo-control' value={reply} onChange={(event) => setReply(event.target.value)}/>
            </div>
                <button type='onClick' className="buttonSubmit" style={{'margin-top': '1em'}}>CREATE</button>
        </form>
    )

}

export default CreateReply;


// search bar results need to populate into video snippet squares
// how many squares?
// what line of code is required to ping YT api for search results?
// how to get video snippet to open in the primary video page?