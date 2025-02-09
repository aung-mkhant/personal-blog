import { formatDate } from "@/lib/utils";
import Link from "next/link";




export default function Preview({ slug, title, date }) {
    return <Link href={`/blog/${slug}`}>
        <div className="font-bold mb-10">
            <h2 className="font-literata text-xl">{title}</h2>
            <p className="font-young-serif mt-1">{formatDate(date)}</p>
        </div></Link>
}