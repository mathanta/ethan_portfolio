import Image from 'next/image'

interface BookProps {
    image: string;
    title: string;
    subtitle: string;
    author: string;
    year: number;
}

const BookCard = ({ image, title, subtitle, author, year }: BookProps) => {
    return (
        <div className="card">
            <Image src={image} alt={`Cover of ${title}`} className="cover" width={100} height={100} />
            <div className="info">
                <h3>{title}</h3>
                {subtitle && <p className="subtitle">{subtitle}</p>}
                <p>By {author}</p>
                <p className="year">Published: {year}</p>
            </div>
        </div>
    );
};

const books = [
    {
        image: "/duckett-htmlcss.jpg",
        title: "HTML and CSS:",
        subtitle: "Design and Build Websites",
        author: "Jon Duckett",
        year: 2011
    },
    {
        image: "/duckett-javascript.jpg",
        title: "JavaScript & jQuery:",
        subtitle: "Interactive Front-End Web Development",
        author: "Jon Duckett",
        year: 2014
    },
    {
        image: "/bugl-react.jpg",
        title: "Modern Full-Stack React Projects:",
        subtitle: "Build, maintain, and deploy modern web apps using MongoDB, Express, React, and Node.js",
        author: "Daniel Bugl",
        year: 2024
    }
];

const BookSection = () => {
    return (
        <div className="books">
            <div className="booksheader">Books That I&apos;ve Read</div>
            {books.map((book) => (<BookCard key={book.title} {...book} />))}
        </div>
    );
};

export default BookSection;
