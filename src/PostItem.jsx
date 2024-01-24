import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({ id, title, content, thumbnail}) => {
  return (
    <article className='post'>
        <div className="post_thumbnail">
            <img src={thumbnail} alt={title}  style={{width: '100%'}}/>
        </div>
        <div className="post_content">
           <h3>{title}</h3>
            <p>{content}</p>
        </div>



    </article>
  )
}

export default PostItem