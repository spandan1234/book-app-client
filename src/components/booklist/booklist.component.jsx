import React from "react";
import {gql} from 'apollo-boost'
import {graphql} from "react-apollo";
import {getBooksQuery} from '../../queries/queries';


class BookList extends React.Component {

    displayBooks() {
        let data = this.props.data;
        if (data.loading) {
            return (
                <div>Loading Books...</div>
            )
        } else {
            return data.books.map(book => (
                    <li key={book.id}>{book.name}</li>
                )
            )
        }
    }

    render() {
        return (
            <div>
                <h1>Book List</h1>
                {this.displayBooks()}
            </div>
        )
    }
};

export default graphql(getBooksQuery)(BookList);