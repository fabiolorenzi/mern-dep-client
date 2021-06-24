import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function CreateBook() {
    const history = useHistory();
    const [bookInfo, setBookInfo] = useState({
        title: "",
        isbn: "",
        author: "",
        description: "",
        published_date: "",
        publisher: "",
        updateDate: ""
    });

    const handleChange = e => {
        setBookInfo({...bookInfo, [e.target.name]: e.target.value});
    };

    const submit = e => {
        e.preventDefault();
        const data = {
            title: bookInfo.title,
            isbn: bookInfo.isbn,
            author: bookInfo.author,
            description: bookInfo.description,
            published_date: bookInfo.published_date,
            publisher: bookInfo.publisher,
            updateDate: ""
        };

        axios.post('https://mern-dep.herokuapp.com/api/books', data)
            .then(res => {
                setBookInfo({
                    title: "",
                    isbn: "",
                    author: "",
                    description: "",
                    published_date: "",
                    publisher: "",
                    updateDate: ""
                });
                history.push("/");
            })
            .catch(err => console.log("Error in creating the book"));
    };

    return(
        <div className="CreateBook">
            <div className="container">
                <div className="row">
                    <div>
                        <Link to="/">SHOW BOOK LIST</Link>
                    </div>
                    <div>
                        <h1>Create a new Book</h1>
                        <form noValidate onSubmit={submit}>
                            <input type="text" name="title" placeholder="title" value={bookInfo.title} onChange={handleChange} />
                            <input type="text" name="isbn" placeholder="isbn" value={bookInfo.isbn} onChange={handleChange} />
                            <input type="text" name="author" placeholder="author" value={bookInfo.author} onChange={handleChange} />
                            <input type="text" name="description" placeholder="description" value={bookInfo.description} onChange={handleChange} />
                            <input type="date" name="published_date" placeholder="published_date" value={bookInfo.published_date} onChange={handleChange} />
                            <input type="text" name="publisher" placeholder="publisher" value={bookInfo.publisher} onChange={handleChange} />
                            <button type="submit">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBook;