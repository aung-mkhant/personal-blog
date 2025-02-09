import { formatDate } from "@/lib/utils";
import Image from "next/image";




export default async function ({ title, date, coverImage, excerpt, content, }) {

    return <div className="blog-post">
        <h1 className="font-young-serif text-5xl mt-8 mb-8 font-bold">{title}</h1>
        <span className="mt-4 font-young-serif">{formatDate(date)}</span>
        <Image src={coverImage}
            className="mt-8 mx-auto"
            alt={`cover image for ${title}`}
            width="768"
            height="500"
        />

        <div
            className="md:px-8 pb-24 mt-8"
            dangerouslySetInnerHTML={{ __html: content }}
        />



    </div>
}