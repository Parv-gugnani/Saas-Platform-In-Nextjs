"use client";
import { useState, useEffect } from "react";

const BlogPage = () => {
  // Sample data for blog posts (replace with actual data fetched from backend)
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "Content of the first post" },
    { id: 2, title: "Second Post", content: "Content of the second post" },
    { id: 3, title: "Third Post", content: "Content of the third post" },
  ]);

  // Function to fetch blog posts from a backend (if applicable)
  const fetchPosts = async () => {
    try {
      // Make API request to fetch blog posts
      // const response = await fetch("API_URL");
      // const data = await response.json();
      // setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // useEffect to fetch posts when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="max-w-md mx-auto p-4 border mb-4">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
