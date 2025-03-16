import PostDetails from "@/app/components/postDeatails";
import { Suspense } from "react";

export const metadata = {
    title: 'Post',
    description: 'This is the posts page',
    keywords: ['post', 'latest posts'],
};
export default async function PostDetailsPage ({params}) {
    const postId = Number(params.postId); // Convert the postId to a number
    const loadingJsx = (
            <div>
                <h1>Loading 😭</h1>
            </div>
    )
    return (
        <div style={{textAlign:"center" , padding:"20px"}}>
            <h1>Post Details</h1>
                 <Suspense fallback={loadingJsx}>
                    <PostDetails postId = {postId}/>
                </Suspense>
        </div>
    );
};

