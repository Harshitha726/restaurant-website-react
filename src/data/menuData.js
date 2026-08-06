const menuData = [
  // Coffee
  { id: 1, name: 'Flat White', price: 220, category: 'coffee', desc: 'Double espresso, steamed milk, micro-foam.', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=200&q=80' },
  { id: 2, name: 'Iced Cold Brew', price: 240, category: 'coffee', desc: 'Steeped 18 hours, served over ice.', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&q=80', tag: 'Vegan' },
  { id: 3, name: 'Cappuccino', price: 200, category: 'coffee', desc: 'Equal parts espresso, milk, and foam.', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200&q=80' },

  // Breakfast
  { id: 4, name: 'Avocado Sourdough', price: 320, category: 'breakfast', desc: 'Smashed avocado, chili flake, poached egg.', img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=200&q=80', tag: 'Vegetarian' },
  { id: 5, name: 'Almond Croissant', price: 180, category: 'breakfast', desc: 'Laminated butter pastry, toasted almonds.', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200&q=80' },
  { id: 6, name: 'Shakshuka', price: 340, category: 'breakfast', desc: 'Eggs poached in spiced tomato, feta, herb oil.', img: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?w=200&q=80', tag: 'Vegetarian' },

  // Mains
  { id: 7, name: 'Wild Mushroom Pasta', price: 420, category: 'mains', desc: 'Tagliatelle, wild mushrooms, brown butter.', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=200&q=80' },
  { id: 8, name: 'Grilled Chicken Sandwich', price: 380, category: 'mains', desc: 'Herb-marinated chicken, aioli, sourdough.', img: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?w=200&q=80' },

  // Dessert
  { id: 9, name: 'Basque Cheesecake', price: 260, category: 'dessert', desc: 'Burnt-top, creamy center, single slice.', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=200&q=80' },
  { id: 10, name: 'Affogato', price: 220, category: 'dessert', desc: 'Vanilla gelato drowned in hot espresso.', img: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=200&q=80' },
  {
  id: 41,
  name: 'Apricot Delight',
  price: 180,
  category: 'dessert',
  desc: 'Hyderabad-style dessert made with stewed apricots, fresh cream, and vanilla ice cream.',
  img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80'},

  // Morning Tiffins
  { id: 42, name: 'Idly',price: 50, category: 'tiffins', desc: 'Two soft steamed rice cakes served with coconut chutney.',img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80', tag: 'Vegetarian'},
  { id: 11, name: 'Idli Sambar', price: 90, category: 'tiffins', desc: 'Steamed rice cakes served with sambar and coconut chutney.', img:'https://i0.wp.com/gomathirecipes.com/wp-content/uploads/2022/08/3297.jpg?fit=800%2C534&ssl=1' },
  { id: 12, name: 'Masala Dosa', price: 120, category: 'tiffins', desc: 'Crispy rice crepe filled with spiced potato masala.', img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&q=80', tag: 'Vegetarian' },
  { id: 13, name: 'Plain Dosa', price: 90, category: 'tiffins', desc: 'Classic thin crispy rice crepe, served with chutney.', img: 'https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg', tag: 'Vegetarian' },
  { id: 14, name: 'Onion Dosa', price: 110, category: 'tiffins', desc: 'Crispy dosa topped with finely chopped onions and spices.', img: 'https://media.vyaparify.com/vcards/products/177902/product_1743505073_67ebc6b142392.png', tag: 'Vegetarian' },
  { id: 15, name: 'Egg Dosa', price: 130, category: 'tiffins', desc: 'Dosa topped with a layer of spiced beaten egg.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKf7agt0R3NDRW4eT08JMNiXvOZ-hdbP8AH-jDhDq4WlfwXfsLoiZHWCA&s=10' },
  { id: 16, name: 'Paneer Dosa', price: 140, category: 'tiffins', desc: 'Dosa stuffed with spiced paneer filling.', img: 'https://www.sanjanafeasts.co.uk/wp-content/uploads/2023/05/Paneer-Masala-Dosa-735x1103.jpg', tag: 'Vegetarian' },
  { id: 17, name: 'Puri', price: 90, category: 'tiffins', desc: 'Deep-fried fluffy bread served with potato curry.', img: 'https://ministryofcurry.com/wp-content/uploads/2020/03/puri-7.jpg', tag: 'Vegetarian' },
  { id: 18, name: 'Mysore Bonda', price: 80, category: 'tiffins', desc: 'Soft, fluffy deep-fried lentil fritters, served with chutney.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rQcon2gcWW9LQU9KEs6Bac8xCWL3enjbHdOshPtzKjMFvUtVZ_56X7Q&s=10', tag: 'Vegetarian' },
  { id: 19, name: 'Vada', price: 70, category: 'tiffins', desc: 'Crispy fried lentil doughnuts served with sambar and chutney.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWYjZh5PRxddJ6BjoiV7wq2QWJrxGJ9lH5tytv3tVDw&s=10', tag: 'Vegetarian' },

  // Evening Tiffins
  { id: 20, name: 'Punugulu', price: 80, category: 'evening-tiffins', desc: 'Crispy deep-fried dumplings made from fermented rice-lentil batter.', img: 'https://images.getrecipekit.com/20210914065814-punugulu.jpeg?aspect_ratio=1:1&quality=90', tag: 'Vegetarian' },
  { id: 21, name: 'Mirchi Bajji', price: 70, category: 'evening-tiffins', desc: 'Green chilies stuffed and deep-fried in gram flour batter.', img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/mirchi-bajji-mirapakaya-bajji-recipe.jpg', tag: 'Vegetarian' },
  { id: 22, name: 'Idly', price: 70, category: 'evening-tiffins', desc: 'Soft steamed rice cakes, served with chutney.', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80', tag: 'Vegetarian' },
  {
  id: 43,
  name: 'Masala Vada',
  price: 80,
  category: 'evening-tiffins',
  desc: 'Crispy chana dal fritters served with coconut chutney.',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftw1B6A5BFZT7gGhST0BoYoYcl3WR6uPsEZwwmBvZfmXAuFSYaTrr_CQ&s=10',
  tag: 'Vegetarian'
},

  // Lunch
  { id: 23, name: 'Chicken Biryani', price: 280, category: 'lunch', desc: 'Fragrant basmati rice layered with spiced marinated chicken.', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80' },
  { id: 24, name: 'Mutton Biryani', price: 340, category: 'lunch', desc: 'Slow-cooked mutton and basmati rice with saffron and whole spices.', img: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&q=80' },
  { id: 25, name: 'Veg Biryani', price: 220, category: 'lunch', desc: 'Basmati rice cooked with mixed vegetables and biryani spices.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoU-yhSmWOzOxmuxqRVi8YtovA0u--BeZHbehru9-Yo3wcASC1q0Ix0fz&s=10', tag: 'Vegetarian' },
  { id: 26, name: 'Veg Meals', price: 180, category: 'lunch', desc: 'Full-course thali with rice, dal, curries, curd, and pickle.', img: 'https://a2arestaurant.com/wp-content/uploads/2020/11/Veg-meals.jpg', tag: 'Vegetarian' },
  { id: 27, name: 'Jeera Rice', price: 150, category: 'lunch', desc: 'Basmati rice tempered with cumin seeds and ghee.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGa48zKqCnlIMzILmzKkCKvZ3uLEXjxUKszJd-mu5KQ&s=10', tag: 'Vegetarian' },
  { id: 40, name: 'Pulihora', price:100, category: 'lunch', desc: 'Basmati rice tempered with lemon seeds and tumeric.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uTLg13niaoaGtdxfWTPV3SC_OyNz5a1tISW3uXeZ9lCTE91mOcpOpng&s=10',tag: 'Vegetarian' },

  // Chinese
  { id: 28, name: 'Veg Manchurian', price: 190, category: 'chinese', desc: 'Fried vegetable dumplings tossed in tangy Manchurian sauce.', img: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&q=80', tag: 'Vegetarian' },
  { id: 29, name: 'Chicken Manchurian', price: 260, category: 'chinese', desc: 'Crispy chicken tossed in a bold, tangy Manchurian sauce.', img: 'https://static.toiimg.com/thumb/53241077.cms?width=1200&height=900' },
  { id: 30, name: 'Chicken Noodles', price: 230, category: 'chinese', desc: 'Stir-fried noodles tossed with chicken and vegetables.', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80' },
  { id: 31, name: 'Veg Noodles', price: 190, category: 'chinese', desc: 'Stir-fried noodles with mixed vegetables and soy sauce.', img: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80', tag: 'Vegetarian' },
  { id: 32, name: 'Veg Manchurian Noodles', price: 210, category: 'chinese', desc: 'Noodles tossed with veg Manchurian balls in a spicy sauce.', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80', tag: 'Vegetarian' },
  { id: 33, name: 'Chicken Fried Rice', price: 220, category: 'chinese', desc: 'Wok-tossed rice with chicken, egg, and vegetables.', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80' },
  { id: 34, name: 'Manchurian Fried Rice', price: 210, category: 'chinese', desc: 'Fried rice tossed with Manchurian gravy and vegetables.', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80', tag: 'Vegetarian' },
  { id: 35, name: 'Veg Ramen', price: 240, category: 'chinese', desc: 'Noodle soup with vegetables in a light savory broth.', img: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&q=80', tag: 'Vegetarian' },

  // Milkshakes
  { id: 36, name: 'Mango Milkshake', price: 140, category: 'milkshakes', desc: 'Fresh mango blended with chilled milk and a scoop of ice cream.', img: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80', tag: 'Vegetarian' },
  { id: 37, name: 'Chocolate Milkshake', price: 150, category: 'milkshakes', desc: 'Rich chocolate blended with milk and topped with cocoa shavings.', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', tag: 'Vegetarian' },
  { id: 38, name: 'Oreo Milkshake', price: 160, category: 'milkshakes', desc: 'Creamy milkshake loaded with crushed Oreo cookies.', img: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400&q=80', tag: 'Vegetarian' },
  { id: 39, name: 'Strawberry Milkshake', price: 150, category: 'milkshakes', desc: 'Fresh strawberries blended with milk and cream.', img: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&q=80', tag: 'Vegetarian' },
];

export default menuData;