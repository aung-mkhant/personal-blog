
import Preview from "@/components/Preview"
import { getAllPosts } from "@/lib/api"

export default function BlogsPage() {
    const posts = getAllPosts()
    return <>
        <h3 className="mb-12 mt-6">Blog Archive</h3>
        {posts.map(post => <Preview key={post.slug} slug={post.slug} title={post.title} date={post.date} />)}
    </>
}