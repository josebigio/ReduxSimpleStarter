import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

    renderBook() {
        if(!this.props.book) {
            return;
        }
        return this.props.book.title;
    }

    render() {
        return (
            <div className="col-md-4 bookDetail">
                {this.renderBook()}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        book:state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)