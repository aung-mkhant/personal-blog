import BlogPost from "@/components/BlogPost"
import { getPostBySlug } from "@/lib/api"
import markdownToHtml from "@/lib/markdownToHtml"
import { notFound } from "next/navigation"




export default async function BlogPage({ params }) {
    const slug = (await params).slug
    const post = getPostBySlug(slug)

    if (!post) return notFound()
    const content = await markdownToHtml(post.content || "")

    return <BlogPost
        title={post.title}
        date={post.date}
        coverImage={post.coverImage}
        excerpt={post.excerpt}
        content={content}
    />

}