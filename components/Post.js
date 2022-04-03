export const Post =({post}) =>{

    return(
        <article className="post-excerpt">
            <h2 style={{color: 'red'}}>{post.title}</h2>

            <p style={{color: 'blue'}} >{post.body.substring(0, 100) }</p>
        </article>
    )
}
export default Post