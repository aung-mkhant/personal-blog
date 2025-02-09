import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'


export default function AboutPage() {
    return <>
        <h3 className="mb-12 mt-6">Let's get in touch!</h3>
        <div className="social-card font-serif text-lg">
            <p className="text-xl font-bold font-literata">Email Address:</p>
            <Link href="mailto:amk.never.gives.up@gmail.com">
                <span className="underline underline-offset-2 font-young-serif mt-1">amk.never.gives.up@gmail.com</span>
            </Link>
        </div>
        <ScrollArea className="rounded-base h-[200px] w-[350px] text-mtext border-2 border-border bg-main p-4 my-12 shadow-shadow">

            <h4 className='underline underline-offset-2 mb-4'>A little something about me:</h4>
            I LOVE music. It's the best thing anyone could ever have the pleasure of experiencing. Hmm...what else? Oh yes, I like watching movies and stuff. Wait, did I just hear you ask what favorite movie is? Fine, I'll tell you. It's "Back to the Future (1985)". Other than those, I love swimming, skating and learning new skills. Alright, that's enough about me. Thank you for reading if you made it till the end.
        </ScrollArea>

    </>
}