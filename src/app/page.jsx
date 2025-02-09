import Preview from '@/components/Preview';
import { Button } from '@/components/ui/button'

import { getAllPosts } from '@/lib/api';

import Link from 'next/link';


export default async function HomePage() {
  const posts = getAllPosts(3)

  return (
    <div>

      <p className='font-literata text-lg mt-6 mb-12 sm:mb-16'>
        Hi, it's <span className='bg-highlight'>Aung Min Khant</span>. I love Technology and I'm always looking to venture into new  territories. <span className='bg-highlight'>Join me in my journey</span> as I go through various hardships <span className='bg-highlight'>to rise through the ranks</span>!
      </p>

      <div className='mb-16'>
        <h3 className='mb-12'>
          My Writing
        </h3>
        {posts.map(post => <Preview key={post.slug} slug={post.slug} title={post.title} date={post.date} />)}
        <Link href="/blog" passHref>
          <Button>View All Posts</Button>
        </Link>
      </div>


    </div>
  );
}
