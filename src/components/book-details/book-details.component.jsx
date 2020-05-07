import React from "react";
import {graphql} from "react-apollo";
import {getBookQuery} from '../../queries/queries';


class BookDetails extends React.Component {

    render() {
        return (
            <div>
                <h1>Book List</h1>
                {this.displayBooks()}
            </div>
        )
    }
};

export default graphql(getBookQuery)(BookDetails);