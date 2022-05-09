
import {} from 'react-router-dom'
import ReactDOM from "react-dom";


const comments = [
    {user: 'Mike'},
    {video_id: 'lasihgogb'},
    {text: 'This vid is cool'},
    {likes: 2},
    {dislikes: 600}
];


const CommentList = (props) => {

    return ( 
        <div>
            {/* Working on getting Comments to Display */}

            {/* {comments.map((comment) =>{
                return (
                    <div>
                        {comment.user}
                        {comment.video_id}
                        {comment.text}
                        {comment.likes}
                        {comment.dislikes}

                    </div>
                );
            })} */}
        </div>
     );
}
 
export default CommentList;

// ReactDOM.render(<CommentList/>)






