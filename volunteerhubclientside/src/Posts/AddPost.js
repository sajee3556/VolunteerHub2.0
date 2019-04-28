import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPost} from "../actions/volunteerPostsActions";
import PropTypes from 'prop-types';

class AddPost extends Component {
    state = {
        showContactInfo: false,
        postTitle: '',
        postBody: '',
        userName: ''
    };

    onSubmit = (e) => {
        e.preventDefault();

        const {postTitle, postBody, userName} = this.state;

        const newPost = {
            postTitle,
            postBody,
            userName
        };

        //// SUBMIT CONTACT ///
        this.props.addPost(newPost);

        // Clear State
        this.setState({
            showContactInfo: false,
            postTitle: '',
            postBody: '',
            userName: ''
        });

    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        const {showContactInfo,postTitle, postBody, userName} = this.state;
        return (
            <div className="card mb-3">
                <div className="card-header">
                    <b>Add Post</b>
                    <i onClick={() =>
                        this.setState({
                            showContactInfo: !this.state.showContactInfo
                        })
                    }
                       className="fas fa-sort-down "
                       style={{
                           cursor: 'pointer',
                           float: 'right',
                           color: 'black',
                           marginRight: '1rem'
                       }}
                    />
                </div>
                {showContactInfo ? (
                    <div className="card-body text-lg-left">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Post Title</label>
                                <input type="text"
                                       className="form-control form-control-lg"
                                       name="postTitle"
                                       placeholder="Enter Post Title"
                                       value={postTitle}
                                       onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Content:</label>
                                <input type="text"
                                       className="form-control form-control-lg"
                                       name="postBody"
                                       placeholder="Enter the content of this post"
                                       value={postBody}
                                       onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Writer Name:</label>
                                <input type="text"
                                       className="form-control form-control-lg"
                                       name="userName"
                                       placeholder="Enter Writer Name"
                                       value={userName}
                                       onChange={this.onChange}
                                />
                            </div>
                            <input
                                type="submit"
                                value="Add Post"
                                className="btn btn-light btn-block"
                            />
                        </form>
                    </div>) : null}
            </div>
        )
    }
}

AddPost.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default connect(null, {addPost})(AddPost);