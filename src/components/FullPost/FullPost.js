import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render () {
        let post = (
            <div className="FullPost">
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.props.cllicked}>Delete</button>
                </div>
            </div>

        );
        return post;
    }
}

export default FullPost;