# TechPikly — Next.js Frontend Clone

TechPickly (techpickly.devteam.againtheme.com) সাইটের ডিজাইন স্টাইল অনুসরণ করে বানানো একটি Next.js 14 (App Router) + Tailwind CSS ফ্রন্টএন্ড।

## যা যা আছে

- **Home page** (`/`) — hero banner, shop-by-category grid, featured/best-seller product sections
- **Category page** (`/category/[slug]`) — sidebar filters + product grid, top-level ও sub-category উভয়ই কাজ করে
- **Product page** (`/product/[slug]`) — image gallery, price, add-to-cart, tabs, related products
- **YouTube Gallery** (`/youtube-gallery`) — video thumbnail grid + modal player
- **About Us / Contact** পেজও দেওয়া আছে
- Mega menu style category dropdown (হেডারে "Shop By Category")

## চালানোর নিয়ম

```bash
npm install
npm run dev
```

তারপর ব্রাউজারে যান: http://localhost:3000

Production build:

```bash
npm run build
npm start
```

## কাস্টমাইজেশন

- **Colors / theme**: `tailwind.config.js` → `theme.extend.colors.brand`
- **Categories**: `data/categories.ts` (আসল সাইটের ক্যাটাগরি নাম দিয়ে ইতিমধ্যে ভরা আছে; পুরো ট্রি অনেক বড় হওয়ায় প্রতিটি top-level category-এর জন্য প্রথম ৪টি sub-category রাখা হয়েছে — দরকার হলে বাড়িয়ে নিতে পারেন)
- **Products**: `data/products.ts` — নিজের প্রোডাক্ট ডেটা / API দিয়ে replace করুন
- **Videos**: `data/videos.ts` — real YouTube video ID বসান
- **Images**: বর্তমানে placeholder হিসেবে Unsplash images ব্যবহার করা হয়েছে; নিজের প্রোডাক্ট ছবি `public/images/` এ রেখে path বদলে দিন

## পরবর্তী ধাপ (Backend Integration)

এখানে সব ডেটা static (`data/*.ts`) ফাইলে। আসল প্রোডাকশনের জন্য:
1. এগুলোকে API রুট (`app/api/...`) অথবা আপনার OpenCart REST API দিয়ে replace করুন
2. Cart state এর জন্য Context/Zustand ব্যবহার করুন
3. Checkout ও account পেজ যোগ করুন
