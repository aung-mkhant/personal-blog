
import Link from 'next/link'


export default function AboutPage() {
    return <>
        <h3 className="mb-12 mt-6 font-bold">Let's get in touch!</h3>
        <div className="social-card font-serif text-lg">
            <p className="text-xl font-bold font-literata">Email Address:</p>
            <Link href="mailto:amk.never.gives.up@gmail.com">
                <span className="underline underline-offset-2 font-young-serif mt-1">amk.never.gives.up@gmail.com</span>
            </Link>
        </div>


    </>
}