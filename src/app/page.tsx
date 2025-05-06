"use client"
import BookSection from '../../components/BookSection';
import ProjectCards from '../../components/ProjectCards';
import "./globals.css";
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Main() {
  const [text, setText] = useState("");
  const fullText = "./ethanmatta";

  useEffect(() => {
    setText("");
    let i = 0;
    let timeoutId: NodeJS.Timeout;
    const speed = 100;

    const startTimeout = setTimeout(() => {
      const typeWriter = () => {
        if (i < fullText.length) {
          setText(fullText.slice(0, i + 1));
          i++;
          timeoutId = setTimeout(typeWriter, speed);
        }
      };

      typeWriter();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(startTimeout);
      setText("");
    };
  }, []);

  return (
    <>
      <div className="intro-headers">
        <h1>you@here:~$ {text}<span className="cursor">█</span></h1>
        <h2>&gt;Aspiring Web Developer</h2>
        <h3>Current Language: React <Image className="inline-icon" src="/react.svg" alt="react" width="20" height="20" /> </h3>
      </div>
      <ProjectCards />
      <BookSection />
    </>
  );
}