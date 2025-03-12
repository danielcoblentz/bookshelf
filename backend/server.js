import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import Book from './models/book.model.js'

dotenv.config()

const app = express()
app.use(express.json())

app.post('/books', async (req, res) => {
  const book = req.body // user sends this data

  // Check for all required fields except 'isbn'
  if (!book.title || !book.author || !book.publicationYear || !book.genre) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields' })
  }

  const newBook = new Book(book)

  try {
    await newBook.save()
    res.status(201).json({ success: true, data: newBook })
  } catch (error) {
    console.error('Error in creating book:', error.message)
    res.status(500).json({ success: false, message: 'Error in creating book' })
  }
})

app.listen(5000, () => {
  connectDB()
  console.log('Server started at http://localhost:5000/')
})
