import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface BlogPost {
  id: number;
  type: string;
  badge: string;
  title: string;
  description: string;
  author: string;
  category: string;
  categoryColor: string;
  videoUrl: string;
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/api/blog-posts')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const updated = data.map(post => ({
            ...post,
            author: "Top Layer AI automation"
          }));
          setPosts(updated);
        } else {
          setPosts([]);
        }
      });
  }, []);

  const featuredPost = posts.find(p => p.type === 'featured');
  const standardPosts = posts.filter(p => p.type === 'standard');

  return (
    <div className="max-w-[1200px] mx-auto py-[60px] px-[20px] font-sans">
      <header className="mb-[60px]">
        <span className="inline-block bg-[#f4f4f4] text-xs font-semibold px-3 py-1 rounded-full mb-4">Blog</span>
        <h1 className="text-[64px] font-medium tracking-[-2.5px] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Behind the lens</h1>
        <div className="flex justify-between items-end gap-6 flex-wrap">
          <p className="text-[#666] text-[18px] font-medium max-w-[480px] opacity-80">Thoughts, insights, and stories from my photography journey. Take a peek into my creative process and recent projects.</p>
          <button className="bg-black text-white px-6 py-3 rounded-full text-[14px] font-semibold hover:scale-105 transition-transform">View all posts</button>
        </div>
      </header>

      {featuredPost && (
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#fcfcfc] border border-[#f0f0f0] rounded-[20px] min-h-[520px] overflow-hidden mb-[25px]">
          <div className="relative overflow-hidden group">
            <video src={featuredPost.videoUrl} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-400" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="w-[70px] h-[70px] rounded-full bg-white/20 flex items-center justify-center scale-70 group-hover:scale-100 transition-transform duration-300">+</div>
            </div>
            {/* Corner brackets */}
            <div className="absolute top-[15px] left-[15px] w-[12px] h-[12px] border-t-[1.5px] border-l-[1.5px] border-white" />
            <div className="absolute top-[15px] right-[15px] w-[12px] h-[12px] border-t-[1.5px] border-r-[1.5px] border-white" />
            <div className="absolute bottom-[15px] left-[15px] w-[12px] h-[12px] border-b-[1.5px] border-l-[1.5px] border-white" />
            <div className="absolute bottom-[15px] right-[15px] w-[12px] h-[12px] border-b-[1.5px] border-r-[1.5px] border-white" />
          </div>
          <div className="p-[60px] flex flex-col">
            <span className="inline-block bg-black text-white text-[12px] px-3 py-1 rounded-full mb-4 w-fit">Must Read</span>
            <h2 className="text-[48px] font-medium tracking-[-1.5px] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>{featuredPost.title}</h2>
            <p className="text-[#666] text-[17px] mb-6">{featuredPost.description}</p>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-[14px]">{featuredPost.author}</span>
              <span className="text-[11px] font-semibold text-white px-3 py-1 rounded-full" style={{ backgroundColor: featuredPost.categoryColor }}>{featuredPost.category.toUpperCase()}</span>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
        {standardPosts.map(post => (
          <div key={post.id} className="flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] mb-4 group">
                <video src={post.videoUrl} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-400" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-[70px] h-[70px] rounded-full bg-white/20 flex items-center justify-center scale-70 group-hover:scale-100 transition-transform duration-300">+</div>
                </div>
                {/* Corner brackets */}
                <div className="absolute top-[15px] left-[15px] w-[12px] h-[12px] border-t-[1.5px] border-l-[1.5px] border-white" />
                <div className="absolute top-[15px] right-[15px] w-[12px] h-[12px] border-t-[1.5px] border-r-[1.5px] border-white" />
                <div className="absolute bottom-[15px] left-[15px] w-[12px] h-[12px] border-b-[1.5px] border-l-[1.5px] border-white" />
                <div className="absolute bottom-[15px] right-[15px] w-[12px] h-[12px] border-b-[1.5px] border-r-[1.5px] border-white" />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-[17px] font-semibold" style={{ fontFamily: 'Outfit, sans-serif' }}>{post.title}</h3>
              <span className="text-[11px] font-semibold text-white px-3 py-1 rounded-full" style={{ backgroundColor: post.categoryColor }}>{post.category.toUpperCase()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
