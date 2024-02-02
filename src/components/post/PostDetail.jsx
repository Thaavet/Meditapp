import React from 'react'

const PostDetail = () => {
  return (
    <section>
   <div className="container post-detail_container">
    <div className="post-detail_header">
    <h1> {title} </h1>
    <img src="{thumbnail} " alt=" {title}" />
    </div>
    <div className="post-detail_content">
    <p> {content} </p>
    </div>
   </div>
   </section>
  )

}

export default PostDetail