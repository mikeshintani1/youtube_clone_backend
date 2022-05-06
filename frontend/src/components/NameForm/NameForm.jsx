import React, { useState } from 'react';
import './NameForm.css'


const NameForm = (props) => {
    const [postName, setName]= useState('');
    const [postComment, setPostComment] = useState('');

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        let newEntry = {
            name: postName,
            comment: postComment
        };
        props.addNewPostProperty(newEntry)
        alert(`Name: ${postName}`);
        alert(`Comment Post: ${postComment}`);

    }

    return (
            <form onSubmit={handleSubmit} className='form-grid'>
                <div className='form-group'>               
                    <label className='label-name'>Name</label>
                    <textarea rows="0"cols="50" input type='text' onChange={(event) => setName(event.target.value)}value={postName}></textarea>
                </div>
            <div>
                <label className='label-post'>Post</label>
                <textarea className='postBox' rows="10" cols="50" input type='text' onChange={(event) => setPostComment(event.target.value)}value={postComment}></textarea>
                <button className="postComment" type='onClick'>Post Comment!</button>
                </div>
            </form>
    );

}


export default NameForm;
