import {} from 'react-router-dom'
import React, { useState } from 'react';


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost);
        props.createNewPostProperty(newPost);
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' value={name} onChange = {(event) => setName((event.target.value))}/> 
            </div>
            <div className='form-group'>
                <label>Post</label>
                <input type='text' className='form-control' value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
                <button type='onClick' className="buttonSubmit" style={{'marginTop': '1em'}}>CREATE</button>
        </form>
    )

}

export default CreatePost;