import { cn } from '@/lib/utils'
import Image from 'next/image'



export default function SkillCard({ children, imgSrc, imgAlt, className }) {
    return <div className={cn("flex flex-col max-w-[300px] gap-8 px-6 items-center p-5", className)}>
        <Image src={imgSrc}
            width={80}
            height={80}
            alt={imgAlt}
        />
        <span className="text-lg font-literata">
            {children}
        </span>

    </div >
}