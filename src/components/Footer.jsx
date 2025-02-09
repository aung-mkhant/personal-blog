import GithubIcon from "./GithubIcon"
import { Button } from "./ui/button"
import Link from "next/link"



export default async function Footer() {
    return <div className="flex flex-col gap-4 sm:justify-between sm:flex-row-reverse sm:items-center pb-12">
        <Link href="/blog" passHref>
            <Button>
                <GithubIcon />
            </Button>
        </Link>

        <span className="font-young-serif">© 2025 Aung Min Khant. All rights reserved.</span>
    </div>
}