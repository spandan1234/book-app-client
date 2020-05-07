import React from "react";
import {gql} from 'apollo-boost'
import {graphql} from "react-apollo";

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`;

class AddBook extends React.Component {

    render() {
        return (
            <div>
                <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                    <div className="field">
                        <label>Book name:</label>
                        <input type="text" onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Genre:</label>
                        <input type="text" onChange={(e) => this.setState({genre: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Author:</label>
                        <select onChange={(e) => this.setState({authorId: e.target.value})}>
                            <option>Select author</option>
                        </select>
                    </div>
                    <button>+</button>
                </form>
            </div>
        )
    }
};

export default graphql(getAuthorsQuery)(AddBook);