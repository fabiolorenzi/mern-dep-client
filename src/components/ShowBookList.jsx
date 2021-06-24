import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "./BookCard.jsx";

function ShowBookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('https://mern-dep.herokuapp.com/api/books')
            .then(res => setBooks(res.data))
            .catch(err => console.log("Data upload failed"));
    }, []);

    let bookList = books
        ? books.map((book, k) => {
            return(<div><BookCard book={book} key={k} /></div>)
        })
        : (<div><h1>No books here</h1></div>);

    return(
        <div>
            <h2>Books List</h2>
            <Link to="/create-book">Add new Book</Link>
            <div className="list">
                {bookList}
            </div>
        </div>
    );
};

export default ShowBookList;