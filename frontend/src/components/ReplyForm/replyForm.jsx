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
        <form onSubmit={handleReply} className='form-grid'>
            <div className='form-groupo'>
                <label>Name</label>
                <input type='text' className='form-control' value={name} onChange = {(event) => setName(event.target.value)}/> 
            </div>
            <div className='form-groupo'>
                <label>REPLY</label>
                <input type='text' className='form-control' value={reply} onChange={(event) => setReply(event.target.value)}/>
            </div>
                <button type='onClick' className="buttonSubmit" style={{'margin-top': '1em'}}>CREATE</button>
        </form>
    )

}

export default CreateReply;