import Typography from "@mui/material/Typography";
import { BookList, type Book } from "./components";


const BOOKS: Book[] = [
  { name: "Refactoring" },
  { name: "Domain-driven design" }
]

function App() {
  return (
    <>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <BookList books={BOOKS} />
    </>
  )
}
export default App