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

export default BookCard;