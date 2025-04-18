'use client'
import Link from 'next/link'

const menuItems = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" }
];

const calculatePosition = (index: number, total: number) => {
    const radius = 60;
    const totalAngle = 180;
    const startAngle = -90;
    
    // Calculate the angle for this item
    const angleStep = totalAngle / (total - 1);
    const currentAngle = startAngle + (angleStep * index);
    
    // Convert angle to radians
    const angleInRadians = (currentAngle * Math.PI) / 180;
    
    // Calculate position
    const x = Math.sin(angleInRadians) * radius;
    const y = Math.cos(angleInRadians) * radius;
    
    return `translate(${x}px, ${y}px)`;
};

export default function MainMenu() {
    return (
        <ul className="mainMenu">
            {menuItems.map((item, index) => (
                <li key={item.href} 
                    style={{
                        transform: `scale(1) ${calculatePosition(index, menuItems.length)}`,
                        transitionDelay: `${0.1 * (index + 1)}s`
                    }}>
                    <Link href={item.href}>{item.text}</Link>
                </li>
            ))}
        </ul>
    );
}