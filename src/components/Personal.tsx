import React, { useState } from 'react';
import { Calendar, Tag, X } from 'lucide-react';

interface BlogPost {
  date: string;
  title: string;
  content: string;
  tags: string[];
  image?: string;
}

const Personal: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [

    {
        date: "March 21, 2025",
        title: "Will miss you, Singapore",
        content: "The second half of spring break, I was teaching a high school program in Singapore. I run workshops on web development and introduced students to HTML and CSS. I tried Dragon Fruit and loved it, went to a night safari and flower garden ",
        tags: ["travel", "food", "teaching"],
        image: "/images/IMG_2409.HEIC"
      },
    {
      date: "March 15, 2025",
      title: "안녕하세요, Seoul",
      content: "I spent first half of spring break in Seoul, Korea, visiting high school friends, exploring the city, accidentally ending up on a hike and buying (too much) skincare. I tried korean barbecue for the first time and studied for CS 124 midterm in the prettiest library ever!",
      tags: ["travel", "food", "nature"],
      image: "/images/IMG_2120.HEIC"
    },
  ];

  return (
    <section className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-5xl font-bold text-secondary">
            Personal Notes
          </h2>
          <div className="h-[1px] flex-1 bg-primary/10"></div>
        </div>
        
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              onClick={() => setSelectedPost(post)}
              className="group rounded-[8px] p-6 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2 text-primary/70 mb-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary group-hover:text-secondary transition-all duration-300 mb-3">
                {post.title}
              </h3>
              <div className="flex gap-6 items-start">
                <p className="text-primary/70 leading-relaxed mb-4 line-clamp-2 flex-1">
                  {post.content}
                </p>
                {post.image && (
                  <div className="w-32 h-32 rounded-[8px] overflow-hidden flex-shrink-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="flex items-center gap-1 px-3 py-1 text-sm bg-primary/5 rounded-[8px] text-primary/70 group-hover:bg-primary/10 transition-all duration-300"
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-background rounded-[8px] p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
            >
              <X size={20} className="text-primary/70" />
            </button>
            
            <div className="flex items-center gap-2 text-primary/70 mb-4">
              <Calendar size={16} />
              <span>{selectedPost.date}</span>
            </div>
            
            <h3 className="text-3xl font-semibold text-secondary mb-4">
              {selectedPost.title}
            </h3>
            
            {selectedPost.image && (
              <div className="mb-6 rounded-[8px] overflow-hidden">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}
            
            <p className="text-primary/70 leading-relaxed mb-6">
              {selectedPost.content}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {selectedPost.tags.map((tag, i) => (
                <span 
                  key={i}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-primary/5 rounded-[8px] text-primary/70"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Personal; 