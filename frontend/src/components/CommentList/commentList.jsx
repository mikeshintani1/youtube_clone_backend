<<<<<<< Updated upstream
=======
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

            {comments.map((comment) =>{
                return (
                    <div>
                        {comment.user}
                        {comment.video_id}
                        {comment.text}
                        {comment.likes}
                        {comment.dislikes}

                    </div>
                );
            })}
        </div>
     );
}
 
export default CommentList;

ReactDOM.render(<CommentList/>)

>>>>>>> Stashed changes



const DisplayPost = (props) => {

    return(
        <table className="table" chartType='Table'>
            <thead>
                <tr>
                <th scope="col" className ="name-col">Name</th>
                <th scope="col" className='post-col'>Post</th>

                </tr>
            </thead>
                <tbody>
                    {props.parentPosts.map((entry,index) => {
                    return(
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td className='comment-col'>{entry.comment}</td>

                        </tr>
                    );
                    })}
                </tbody>
        </table>
    );
                }
export default DisplayPost;