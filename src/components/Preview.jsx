import { formatDate } from "@/lib/utils";
import Link from "next/link";




export default function Preview({ slug, title, date, excerpt }) {
    return <div className="mb-12 sm:mb-10">
        <Link href={`/blog/${slug}`} className="hover:underline underline-offset-2">
            <h2 className="font-literata font-bold text-3xl">{title}</h2>
        </Link>
        <p className="font-young-serif text-[#9ca3af] mt-1">{formatDate(date)}</p>

        <p className="font-literata mt-3 text-lg">{excerpt}</p>

        <Link href={`/blog/${slug}`} className="hover:underline underline-offset-2 text-[hsl(200,100%,50%)]">
            Read more
        </Link>
    </div>
}