import express, { Request, Response } from 'express';
import { books } from './data/books';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Servidor iniciado correctamente');
});

app.get('/help', (req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

// Ruta general
app.get('/api/books', (req: Request, res: Response) => {
  res.status(200).json(books);
});


app.get('/api/books/category', (req: Request, res: Response) => {

  const categoryName = (req.query.category as string) || (req.query[''] as string);

  if (categoryName) {
    const filteredBooks = books.filter(b => 
      b.category && b.category.toLowerCase() === categoryName.toLowerCase()
    );
    return res.status(200).json(filteredBooks);
  }

  res.status(400).json({ error: "No se especificó ninguna categoría" });
});


app.get('/api/books/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: "El ID no es un entero positivo" });
  }

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }

  res.status(200).json(book);
});

export default app;