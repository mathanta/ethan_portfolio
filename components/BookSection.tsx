import BookCard from './BookCard';
import { books } from '../data/books';

const BookSection = () => {
    return (
        <div className="books">
            <div className="booksheader">Books That I&apos;ve Read</div>
            {books.map((book) => (<BookCard key={book.title} {...book} />))}
        </div>
    );
};

export default BookSection;