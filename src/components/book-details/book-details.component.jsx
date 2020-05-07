import React from "react";
import {graphql} from "react-apollo";
import {getBookQuery} from '../../queries/queries';


class BookDetails extends React.Component {
    displayBookDetails() {
        const {book} = this.props.data;
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All Books by this author</p>
                    <ul className="other-books">
                        {book.author.books.map(book => (
                            <li key={book.id}>{book.name}</li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return (
                <div><strong>!No Book Returned!</strong></div>
            )
        }
    };

    render() {

        return (
            <div>
                <h1>Book Details</h1>
                {this.displayBookDetails()}
            </div>
        )
    }
};

export default graphql(getBookQuery, {
    options: (props) => (
        {
            variables: {
                id: props.bookid
            }
        }
    )
})(BookDetails);