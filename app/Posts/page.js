import React from 'react';
import Link from 'next/link';
export const metadata = {
    title: 'Posts',
    description: 'This is the posts page',
    keywords: ['posts', 'latest posts'],
};
export default async function PostsPage () {

    const response = await 
    fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            //  cache:"force-cache" is a defoult value (SSG) the ALL componentes well be (SSG)
                // cache:"no-store", 
            // cache:"no-store" // the componentes well be (SSR) .
            // What about if i want make the componentes (ISG) ?
            next:{
                revalidate: 120, // the number Represents the number of seconds that this request will be cached.
                // be before it goes away and renders again and retrieves it from the beginning
            }
        }
        );
    const posts = await response.json();
    const postJsx = posts.map((post) => { 
        return (
            <Link href={`/Posts/${post.id}`}
                style={{
                        width: '70%', 
                        padding: '10px', 
                        border: '1px solid #ccc',
                        background:"white" , 
                        color:"black" , 
                        borderRadius:"10px",
                    }} key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
            </Link>
        )
    });
    return (
        <div style={{textAlign: 'center', marginBottom:"10px"}}>
            <h1>Posts</h1>
            <h3>Welcome to the posts page.</h3>
            {/* Post */}
            <div style={{
                display:"flex", 
                justifyContent:"center", 
                alignItems:"center" , 
                flexDirection:"column" ,
                gap:"10px" , 
                }}>{postJsx}</div>
            {/* === Post === */}
        </div>
    );
};

