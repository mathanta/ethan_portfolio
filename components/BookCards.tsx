import styles from '/src/app/about/about.module.css'
import Image from 'next/image'

interface BookProps {
    image: string;
    title: string;
    author: string;
    year: number;
}

const BookCard = ({ image, title, author, year }: BookProps) => {
    return (
        <div className={styles.card}>
            <Image src={image} alt={`Cover of ${title}`} className={styles.cover} width={100} height={150} />
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>By {author}</p>
                <p>Published: {year}</p>
            </div>
        </div>
    );
};

export const books = [
    {
        image: "/duckett-htmlcss.jpg",
        title: "HTML and CSS: Design and Build Websites",
        author: "Jon Duckett",
        year: 2011
    },
    {
        image: "/duckett-javascript.jpg",
        title: "JavaScript & jQuery: Interactive Front-End Web Development",
        author: "Jon Duckett",
        year: 2014
    }
];

export default BookCard;