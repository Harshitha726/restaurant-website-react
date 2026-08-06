import React from 'react';

const posts = [
  { title: 'What "single-origin" actually means', meta: 'Coffee · Jul 28', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80' },
  { title: 'Why our menu changes every season', meta: 'Kitchen · Jul 15', img: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=500&q=80' },
  { title: 'Three home espresso mistakes', meta: 'How-to · Jun 30', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80' },
];

function Blog() {
  return (
    <section>
      <div className="container-narrow">
        <h1>Blog</h1>
        <div className="row g-4">
          {posts.map((post, i) => (
            <div className="col-md-4" key={i}>
              <div className="qb-card blog-card">
                <img src={post.img} alt={post.title} />
                <div className="body">
                  <div className="meta">{post.meta}</div>
                  <h5>{post.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;