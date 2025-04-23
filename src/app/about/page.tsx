import styles from '../about/about.module.css'
import BookCard, { books } from '../../../components/BookCards'

export default function About() {
    return (
        <>
            <p className={styles.p}>Hello About</p>
            <div className={styles.books}>
                <div className={styles.booksheader}>Books That I've Read</div>
                {books.map((book) => {
                    return (
                        <BookCard
                            key={book.title}
                            {...book}
                        />
                    );
                })}
            </div>
        </>
    );
}