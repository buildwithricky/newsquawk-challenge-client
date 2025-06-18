"use client"

import { ChevronDown, Share, ExternalLink, X, HelpCircle } from "lucide-react"

 function App() {
  const posts = [
    {
      time: "14:33",
      content: "BE COOL! Everything is going to work out well. The USA will be bigger and better than ever before!",
    },
    
  ]

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
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
          >
            <div className="text-slate-400 text-sm font-mono min-w-[40px]">{post.time}</div>
            <div className="flex-1 text-slate-200 text-sm leading-relaxed">{post.content}</div>
            <div className="flex-shrink-0">
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default App