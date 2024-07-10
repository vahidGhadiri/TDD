import Typography from "@mui/material/Typography";
import { BookList, type Book, BookListContainer } from "./components";


const BOOKS: Book[] = [
  { name: "Refactoring" },
  { name: "Domain-driven design" }
]
const App = () => {
  return (
    <div>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <BookListContainer />
    </div>
  );
}
export default App