export const metadata = {
    title: 'Post Details',
    description: 'This is the posts page',
    keywords: ['post', 'latest posts'],
};
export default async function PostDetails ({postId}) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a slow network request   
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, 
           { 
            next : {revalidate: 120, } , // the number Represents the number of seconds that this request will be cached.
    });
        const post = await response.json();
        console.log("Post Data:", post);

    return (
        <div style={{textAlign:"center" , padding:"20px"}}>
                 <div 
                    style={{
                        display:"flex", 
                        justifyContent:"center", 
                        alignItems:"center" , 
                        flexDirection:"column" ,
                        gap:"10px" , 
                        background:"mediumslateblue	",
                        color:"black" , 
                        borderRadius:"10px",
                        padding: '10px', 
                        border: '1px solid #ccc',
                        marginTop:"10px",
                    }}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
        </div>
    );
};

