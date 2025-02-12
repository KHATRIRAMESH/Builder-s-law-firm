import { useEffect, useState } from "react";
import PostCard from "../components/PostCard.jsx";
import axiosInstance from "../utils/axiosInstance";

export default function Blog() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get(`api/post/getPosts`);
     
      const posts = res.data.posts;
    setPost(posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
     

      <div className="w-full mx-auto p-3 flex flex-wrap  gap-8 py-7">
        {post && post.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl mb-5 font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-col items-center justify-center">
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8">
              {post.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            </div>
            {/* <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link> */}
          </div>
        )}
      </div>
    </div>
  );
}
