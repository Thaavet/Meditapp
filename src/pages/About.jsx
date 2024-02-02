import React from "react";
import { Posts } from "../components/post/Posts";
import '../components/post/post.css'
import { Helmet } from "react-helmet";


function About() {
    return (   <> 
    <Helmet> <title>About Meditation - Meditapp</title></Helmet>
    <h1>About Meditation</h1>
            <div>
                <Posts />
            </div>
</>

    );      
}

export default About