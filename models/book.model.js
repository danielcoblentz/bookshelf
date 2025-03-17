import mongoose from "mongoose";

// create a schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, reuired: true },
  publicationYear: Number,
  genre: String,
  isbn: String,
  timestamps: true, // created at, unpdated at
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
