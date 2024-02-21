import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import  { fetchPosts } from './postSlice';

const PostView = () => {

    // const post = useSelector((state) => console.log(state));

    const {isLoading, posts, error} = useSelector((state) => state.post
    );

    console.log(isLoading);
    console.log(posts);
    console.log(error);
    const dispatch = useDispatch();
    useEffect(()=> {
      dispatch(fetchPosts());
    },[]);
  

  return (
    <div>
   <h1>...</h1>
   
   {isLoading && <h3>Loading ...</h3>}
   {error && <h3>{error}</h3>}
   <section>
   {posts && posts.map((post) => {
       return( 
           <article>
       <h5>{post.title}</h5>
       <p>{post.body}</p>
       </article>
       );
       })}
   </section>


    </div>
  );
};

export default PostView;