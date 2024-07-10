import axios from "axios";
import { FC, useEffect } from "react";
import BookList from "../BookList";
import { useBooks } from "../../hooks";

interface BookListContainerProps {

}

const BookListContainer: FC<BookListContainerProps> = () => {
    const { loading, error, books } = useBooks();;
    return <BookList books={books} />
}


export default BookListContainer