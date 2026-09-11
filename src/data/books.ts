import { Book } from '../models/Book';

export let books: Book[] = [
    { id: 1, 
    title: "Clean Code", 
    author: "Robert C. Martin", 
    price: 85000, 
    category: "Programación",
    available: true },
    { id: 2,
    title: "El lobo estepario",
    author: "Hermann Hesse",
    price: 75000,
    category: "Novela",
    available: true
    },
    { id: 3,
    title: "Rayuela",
    author: "Julio Cortázar",
    price: 110000,
    category: "Novela",
    available: true
    },
    { id: 4,
    title: "El tunel",
    author: "ernesto sabato",
    price: 50000,
    category: "Universal",
    available: true
    },
    { id: 5,
    title: "El principito",
    author: "Antoine de Saint-Exupéry",
    price: 85000,
    category: "Novela",
    available: true
    }
];