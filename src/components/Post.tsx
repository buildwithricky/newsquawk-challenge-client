import { ChevronDown } from "lucide-react"


type PostProps = {
  datePosted: string,
  content: string,
  link: string,
  id:string
}

function Post({ datePosted, content, link ,id}: PostProps) {
  const time = new Date(datePosted).toTimeString().slice(0, 5);
  // link builder
  const url = `https://truthsocial.com/@realDonaldTrump/posts/${id}`
  return (
    <a href={url} target="_blank">
      <div

        className="flex items-start gap-4 p-4 border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
      >
        <div className="text-slate-400 text-sm font-mono min-w-[40px]">{time}</div>
        <div className="flex-1 text-slate-200 text-sm leading-relaxed">{content}</div>
        <div className="flex-shrink-0">
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </div>
      </div>

    </a>

  )
}

export default Post