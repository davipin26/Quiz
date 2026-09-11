import express, { Request, Response } from 'express';
import { books } from './data/books';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Servidor iniciado correctamente');
});

app.get('/help', (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
  });
});

// NUEVO: Ruta general para listar todos y filtrar por categoría
app.get('/api/books', (req: Request, res: Response) => {
  const { category } = req.query;

  if (category) {
    const filteredBooks = books.filter(b => 
      b.category && b.category.toLowerCase() === (category as string).toLowerCase()
    );
    return res.status(200).json(filteredBooks);
  }

  res.status(200).json(books);
});

// INTACTO: Tu ruta para buscar por ID
app.get('/api/books/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: "El ID no es  un entero positivo" });
  }

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }

  res.status(200).json(book);
});

export default app;