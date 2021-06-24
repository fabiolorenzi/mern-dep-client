import React from "react";
import { Route } from "react-router-dom";

import CreateBook from "./components/CreateBook.jsx";
import ShowBookList from "./components/ShowBookList.jsx";
import ShowBookDetails from "./components/ShowBookDetails.jsx";
import UpdateBookInfo from "./components/UpdateBookInfo.jsx";

function App() {
    return(
        <div>
            <Route path="/" exact component={ShowBookList} />
            <Route path="/create-book" component={CreateBook} />
            <Route path="/edit-book/:id" component={UpdateBookInfo} />
            <Route path="/show-book/:id" component={ShowBookDetails} />
        </div>
    );
};

export default App;