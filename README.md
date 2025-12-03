// app/page.tsx or any component
export default function Home() {
  return (
    <div>
      <Navbar />

      <section id="home" className="h-screen bg-gray-100">Home Section</section>
      <section id="about" className="h-screen bg-gray-200">About Section</section>
      <section id="services" className="h-screen bg-gray-300">Services Section</section>
      <section id="contact" className="h-screen bg-gray-400">Contact Section</section>
    </div>
  );
}
✅ 2. Navbar with Scroll + Framer Motion Animation
tsx
Copy code
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("home");

  const handleScroll = (id: string) => {
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center gap-8 p-4 bg-white shadow">
      {navLinks.map((link) => (
        <button
          key={link.href}
          onClick={() => handleScroll(link.href)}
          className="relative"
        >
          {link.name}

          {active === link.href && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute left-0 right-0 -bottom-1 h-[2px] bg-black"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
        </button>
      ))}
    </nav>
  );
}
✅ 3. Enable Smooth Scrolling Globally (Optional but Recommended)
css
Copy code
/* globals.css */
html {
  scroll-behavior: smooth;
}


git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/tunmisedavid/tunmidev.git
git push -u origin main




'use client';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default Providers;
app/layout

<html lang='en' suppressHydrationWarning>
  <body className={inter.className}>
    <Providers>{children}</Providers>
  </body>
</html>
Challenge - Add Dark Mode
reference shadcn docs and setup dark theme Dark Mode
Dark Mode
Dark Mode

npm install next-themes
components/theme-provider.tsx

'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
app/providers.tsx

'use client';
import { ThemeProvider } from '@/components/theme-provider';
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};
export default Providers;
ThemeToggle.tsx

'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark