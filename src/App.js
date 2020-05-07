import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import BookList from "./components/booklist/booklist.component";
import AddBook from "./components/add-book/add-book.component";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});


class App extends React.Component {

    render() {
        return (
            <ApolloProvider client={client}>
                <div className="App">
                    <BookList/>
                    <AddBook/>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
