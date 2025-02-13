
import Highlighted from '@/components/Highlighted';
import Preview from '@/components/Preview';
import Separator from '@/components/Separator';
import Skills from '@/components/Skills';


import { Button } from '@/components/ui/button'


import { getAllPosts } from '@/lib/api';
import Image from 'next/image';

import Link from 'next/link';


export default async function HomePage() {
  const posts = getAllPosts(3)

  return (
    <div>

      <section className='mb-16 pb-12 sm:pb-16 pt-10'>

        <h1 className='text-4xl text-center  font-bold mb-12 font-young-serif'>Greetings, mortals...</h1>
        <Image
          src="/assets/author/amk.JPEG"
          className="mx-auto rounded-full mb-12"
          alt='author - Aung Min Khant'
          width="400"
          height="400"
          priority
        />
        <p className='font-literata text-lg max-w-xl mx-auto'>

          I'm <Highlighted>Aung Min Khant</Highlighted>. I love Technology and I'm always looking to venture into new  territories. Currently, my goal is to get on the road as a <Highlighted>Junior React Developer</Highlighted> and work my way up. <Highlighted>Join me in my journey</Highlighted> as I go through various hardships to rise through the ranks!
        </p>
      </section>

      <Separator />


      <section className='mb-16 py-12'>
        <h1 className='text-4xl text-center font-bold mb-12 font-young-serif'>My Soft Skills?</h1>

        <Skills />
      </section>

      <Separator />

      <section className='mb-16 py-12'>
        <h3 className='mb-12 font-bold'>
          Projects
        </h3>
        <p className='font-literata text-lg'>😷😷🛑 Projects section is still being worked on. Meanwhile, check out my posts section. 👇🏻</p>
      </section>

      <Separator />

      <section className='mb-16 py-12'>
        <h3 className='mb-12 font-bold'>
          Writing
        </h3>
        {posts.map(post => <Preview key={post.slug} slug={post.slug} title={post.title} date={post.date} excerpt={post.excerpt} />)}
        <Link href="/blog" passHref>
          <Button>View All Posts</Button>
        </Link>
      </section>



    </div>
  );
}





