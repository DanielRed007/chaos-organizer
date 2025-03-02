# Chaos Organizer

Welcome to **Chaos Organizer**, a dark-themed web app where you can dump your messy thoughts, links, and ideas into a chaotic bucket and drag them into beautiful order. Built with a modern, fun stack, this project is all about taming chaos in style.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework with App Router for server-side rendering and routing.
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript for robust code.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS for rapid, dark-themed UI design.
- **Drag-and-Drop**: [@dnd-kit/core](https://dndkit.com/) - Modern, lightweight library for draggable interfaces.
- **State Management**: React Context API - Global state for sharing chaos items between components.
- **Database**: [Supabase](https://supabase.com/) - Open-source Firebase alternative for storing chaos items.
- **Deployment**: [Vercel](https://vercel.com/) - Seamless hosting for Next.js apps.
- **Version Control**: [Git](https://git-scm.com/) - Managed via GitHub.

## Features

- **Dark Theme Only**: A sleek, moody UI with gradients and purple accents—no light themes allowed!
- **Chaos Input**: Drop your raw thoughts into a textarea at `/chaos`.
- **Drag-and-Drop Organization**: Reorder your chaos into a tidy list at `/organize`.
- **Landing Page**: A stylish entry point at `/` to dive into the app.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20.x or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A [Supabase](https://supabase.com/) account and project
- [Git](https://git-scm.com/) installed

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/chaos-organizer.git
   cd chaos-organizer

2. **Install Dependencies**
   ```bash
   npm install

3. **Set Up Environment Variables**
   Create a .env.local file in the project root to store your Supabase keys:
   ```bash
   touch .env.local

Add the following, replacing with your values from the Supabase dashboard:

NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

Note: Never commit .env.local to Git—it’s already in .gitignore!

4. **Run the Development Server**
   
   ```bash
   npm run dev

Open http://localhost:3000 in your browser.

Explore the App
/: Landing page

/chaos: Add your chaotic items

/organize: Drag them into order

5. **Deployment**
Push to a GitHub repository.

Link it to Vercel.

Add the same environment variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY) in Vercel’s dashboard under Settings > Environment Variables.

Deploy and enjoy!

Contributing
Feel free to fork, tweak, and submit pull requests. Chaos tamers unite!
License
MIT © [Your Name] 2025


