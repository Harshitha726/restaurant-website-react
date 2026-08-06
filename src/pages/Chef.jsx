import React from 'react';

function Chef() {
  return (
    <section>
      <div className="container-narrow">
        <h1>Meet the Chefs</h1>

        {/* Featured head chef */}
        <div className="chef-hero">
          <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&q=80" alt="Head Chef Arjun Mehta" />
          <div>
            <div className="section-eyebrow">Head Chef</div>
            <h2>Arjun Mehta</h2>
            <p>Fifteen years in kitchens across Mumbai, Melbourne, and back home again. Arjun leads our tiffins and biryani counters, blending traditional South Indian technique with a modern touch.</p>
            <div className="chef-quote">"A good plate should taste like the week it was made."</div>
          </div>
        </div>

        {/* Team grid */}
        <div className="chef-team-grid">
          <div className="chef-team-card">
            <img src="https://images.unsplash.com/photo-1595475207225-428b62bda831?w=400&q=80" alt="Chef Lakshmi Reddy" />
            <h4>Lakshmi Reddy</h4>
            <span className="chef-role">Tiffin & Dosa Specialist</span>
            <p>Perfecting crispy dosas and soft idlis for over a decade, Lakshmi runs our morning tiffin service with an unmatched eye for detail.</p>
          </div>

          <div className="chef-team-card">
            <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80" alt="Chef Karan Shah" />
            <h4>Karan Shah</h4>
            <span className="chef-role">Chinese & Wok Chef</span>
            <p>Karan heads our Chinese kitchen, turning out fiery Manchurian, noodles, and fried rice with authentic wok-hei flavor every time.</p>
          </div>

          <div className="chef-team-card">
            <img src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80" alt="Chef Divya Rao" />
            <h4>Divya Rao</h4>
            <span className="chef-role">Pastry & Desserts</span>
            <p>From Basque cheesecake to our famous apricot delight, Divya crafts every dessert on the menu with precision and care.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chef;