import type { FC } from "react";

export type Book = {
    name: string
    id: number
}
interface BookListProps {
    books: Book[]
}

const BookList: FC<BookListProps> = ({ books }) => {
    return <div data-test='book-list'>
        {
            books.map(book => (<div className='book-item'
                key={book.id}>
                <h2 className='title'>{book.name}</h2>
            </div>))
        }
    </div>;
}
export default BookList;