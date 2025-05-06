'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Project {
  title: string
  image: string
  description: string[]
  link?: string
  tech?: string
}

const webProjects: Project[] = [
  {
    title: "3D Chess Game",
    image: "/chess-screenshot.jpg",
    description: ["Interactive 3D chess built with Three.js"],
    link: "https://game.mattafam.com",
    tech: "threejs"
  },
  {
    title: "Wedding Website",
    image: "/wedding-site-screenshot.jpg",
    description: ["Webpage made for a wedding. RSVP functionality"],
    link: "https://aleciaandethan.com",
    tech: "react"
  },
  {
    title: "Home Lab Links",
    image: "/links-screenshot.jpg",
    description: ["Custom homepage made for my home lab"],
    link: "https://lab.mattafam.com",
    tech: "javascript"
  },
  {
    title: "Auto Parts Store Project",
    image: "/project-screenshot.jpg",
    description:
      [
        "A project made during my computer science course, Java Frameworks",
        "(screenshot only, not in GitHub, contains coursework soulutions)"
      ],
    tech: "springboot"
  },
  {
    title: "Linux Game",
    image: "/fegame-screenshot.jpg",
    description: ["This game is built with Python, inspired by Fire Emblem"],
    tech: "python"
  },
  {
    title: "This Portfolio",
    image: "/portfolio-screenshot.jpg",
    description: ["Page for me to show you what I've got"],
    tech: "react"
  },
]

const homeLab: Project[] = [
  {
    title: "ESXi Server",
    image: "/esxi-screenshot.jpg",
    description: ["The heart of my home lab on a custom built PC, running many VMs"],
  },
  {
    title: "Portainer",
    image: "/portainer-screenshot.jpg",
    description: ["My main tool for managing most of the tools I use in my home lab"],
  },
  {
    title: "Home NAS Server",
    image: "/nas-screenshot.jpg",
    description: ["Custom built NAS using TrueNAS"],
  },
]

function ProjectRow({ projects }: { projects: Project[] }) {
  const [activePanel, setActivePanel] = useState(0)

  return (
    <div className="project-row">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project-panel ${index === activePanel ? 'active' : ''}`}
          onClick={() => setActivePanel(index)}
          style={{
            backgroundImage: `url(${project.image})`
          }}
        >
          <div className="project-content">
            <h3>{project.title}</h3>
            {index === activePanel && (
              <div className="project-details">
                {project.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                {project.link && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project →
                  </Link>
                )}
              </div>
            )}
          </div>
          {project.tech && (
            <div className="tech-icon">
              <Image
                src={`/${project.tech}.svg`}
                alt={project.tech}
                width={50}
                height={50}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function ProjectCards() {
  return (
    <div className="projects-container">
      <ProjectRow projects={webProjects} />
      <ProjectRow projects={homeLab} />
    </div>
  )
}