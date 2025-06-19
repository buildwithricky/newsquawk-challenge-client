"use client"

import {  Share, ExternalLink, X, HelpCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { fetchLatestPosts, type Post } from "./service";
import PostComponent from "./components/Post";
import { baseUrl } from "./utils";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const initPostRequest = async () => {
      try {
        const initialPosts = await fetchLatestPosts();
        setPosts(initialPosts)
      }
      catch (err) {
        console.error("Error loading post", err)
      }
    }

    initPostRequest()

    //OPEN EVENT STREAM CLIENT
    const eventSource = new EventSource(`${baseUrl}/stream`)
    eventSource.onmessage = (event) => {
      // if there is a new message parse the post and add it to the list if not duplicate
      const newPost: Post = JSON.parse(event.data);
      setPosts((prev) => {
        if (prev.find((p) => p.id === newPost.id)) return prev;
        return [newPost, ...prev].slice(0, 20);
      });
    };
    eventSource.onerror = (err) => {
      console.error('SSE error:', err);
      eventSource.close();
    };
    return () => {
      eventSource.close();
    };
  }, [])


  return (
    <div className="bg-slate-800 text-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <h1 className="text-lg font-medium text-slate-300">Truth Social</h1>
        <div className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-slate-400" />
          <Share className="w-5 h-5 text-slate-400" />
          <ExternalLink className="w-5 h-5 text-slate-400" />
          <X className="w-5 h-5 text-slate-400" />
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-2xl mx-auto">
        {posts.map((post) => <PostComponent id={post.id} key={post.id} datePosted={post.timestamp} content={post.content} link={post.url} />)}
      </div>
    </div>
  )
}


export default App