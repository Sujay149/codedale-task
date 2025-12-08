CodeDale – Digital Agency Website

A high-performance, modern, and responsive digital agency website built for CodeDale. Designed with a strong focus on UI/UX, component architecture, accessibility, and smooth user experience.

🚀 Live Demo

Explore the live website:
https://code-dale.vercel.app

✨ Key Features

Contemporary UI/UX inspired by modern agency design trends

Built with Next.js 16 and Tailwind CSS 4 for performance and flexibility

Fully responsive across all screen sizes

Smooth Framer Motion animations

Interactive sections, including:

Hero with animated elements

Services showcase

Projects section

Testimonials & achievements

FAQ accordion

Contact form

Floating navigation with scroll awareness

Dark/Light theme using next-themes

Component-driven architecture using Radix UI

Form handling with React Hook Form + Zod

🛠 Tech Stack:

| Category        | Technologies         |
| --------------- | -------------------- |
| Framework       | Next.js 16           |
| Language        | TypeScript           |
| Styling         | Tailwind CSS 4       |
| UI Components   | Radix UI             |
| Animations      | Framer Motion        |
| Forms           | React Hook Form, Zod |
| Icons           | Lucide React         |
| Package Manager | pnpm                 |

📦 Prerequisites:

Ensure the following are installed:

Node.js v18+

pnpm (recommended) or npm

⚙️ Getting Started:
1. Clone the repository

git clone https://github.com/Sujay149/codedale-task.git
cd codedale-task

2. Install dependencies

Using pnpm:

pnpm install


Using npm:

npm install

3. Start the development server
pnpm dev


or

npm run dev


Visit http://localhost:3000
 to view the project.

📁 Project Structure
codedale-task/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── contact/
├── components/
│   ├── ui/
│   ├── hero-section.tsx
│   ├── services.tsx
│   ├── faq-section.tsx
│   ├── header.tsx
│   ├── floating-nav.tsx
│   └── ...
├── lib/
├── public/
├── styles/
└── package.json

🔧 Scripts
Command	Description
pnpm dev	Start development server
pnpm build	Build for production
pnpm start	Launch production server
pnpm lint	Run ESLint
🎨 Customization Guide
Theme & Colors

Modify tailwind.config.js and global styles in app/globals.css.

Content Editing

Home Page: app/page.tsx

Contact Page: app/contact/page.tsx

Sections: components/

Assets

Place images in the /public directory and reference using:

/your-image.png

🚀 Deployment
Deploy on Vercel (Recommended)

Push project to GitHub

Import repository into Vercel

Deploy — automatic Next.js detection included

Manual Build
pnpm build
pnpm start

🔐 Environment Variables

Create .env.local:

NEXT_PUBLIC_API_URL=your_api_url

🤝 Contributing

Contributions are welcome. Feel free to open issues or submit pull requests.

👤 Author

Sujay
GitHub: https://github.com/Sujay149

📝 License

This project is licensed under the MIT License.

🙏 Acknowledgments

Built with Next.js

Components powered by Radix UI

Styled using Tailwind CSS
