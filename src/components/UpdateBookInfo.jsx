import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function UpdateBookInfo(props) {
    const history = useHistory();
    const [bookIn, setBookIn] = useState({
        title: "",
        isbn: "",
        author: "",
        description: "",
        published_date: "",
        publisher: "",
        updateDate: ""
    });

    useEffect(() => {
        axios.get('https://mern-dep.herokuapp.com/api/books/' + props.match.params.id)
            .then(res => {
                setBookIn({
                    title: res.data.title,
                    isbn: res.data.isbn,
                    author: res.data.author,
                    description: res.data.description,
                    published_date: res.data.published_date,
                    publisher: res.data.publisher,
                    updateDate: res.data.updateDate
                });
            })
            .catch(err => console.log("Error from UpdateBookInfo"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = e => {
        e.preventDefault();
        setBookIn({...bookIn, [e.target.name]: e.target.value});
    };

    function submit(e) {
        e.preventDefault();
        const data = {
            title: bookIn.title,
            isbn: bookIn.isbn,
            author: bookIn.author,
            description: bookIn.description,
            published_date: bookIn.published_date,
            publisher: bookIn.publisher,
            updateDate: new Date()
        };
        axios.put('https://mern-dep.herokuapp.com/api/books/' + props.match.params.id, data)
            // eslint-disable-next-line no-restricted-globals
            .then(res => history.push("/show-book/" + props.match.params.id))
            .catch(err => console.log("Error in UpdateBookInfo"));
    };

    return(
        <div className="UpdateBookInfo">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link to="/" className="btn btn-outline-warning float-left">
                            Show BooK List
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Edit Book</h1>
                        <p className="lead text-center">
                            Update Book's Info
                        </p>
                    </div>
                </div>
                <div className="col-md-8 m-auto">
                    <form noValidate onSubmit={submit}>
                        <div className='form-group'>
                            <label htmlFor="title">Title</label>
                            <input
                                type='text'
                                placeholder='Title of the Book'
                                name='title'
                                className='form-control'
                                value={bookIn.title}
                                onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <label htmlFor="isbn">ISBN</label>
                            <input
                                type='text'
                                placeholder='ISBN'
                                name='isbn'
                                className='form-control'
                                value={bookIn.isbn}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="author">Author</label>
                            <input
                                type='text'
                                placeholder='Author'
                                name='author'
                                className='form-control'
                                value={bookIn.author}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="description">Description</label>
                            <input
                                type='text'
                                placeholder='Describe this book'
                                name='description'
                                className='form-control'
                                value={bookIn.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="published_date">Published Date</label>
                            <input
                                type='date'
                                placeholder='published_date'
                                name='published_date'
                                className='form-control'
                                value={bookIn.published_date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="publisher">Publisher</label>
                            <input
                                type='text'
                                placeholder='Publisher of this Book'
                                name='publisher'
                                className='form-control'
                                value={bookIn.publisher}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBookInfo;
