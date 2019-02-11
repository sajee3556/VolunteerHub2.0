import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

class Posts extends Component{
    render(){
        const {post} = this.props;
        return(
            <div className="card">
                <div className="card-header bg-info text-lg-left ">
                    <b>{post.postTitle }</b>
                    <Link to={`post/edit/${post.volunteerPostsId}`}>
                        <i
                            className="fas fa-pencil-alt"
                            style={{
                                cursor: 'pointer',
                                float: 'right',
                                color: 'black',
                                marginRight: '1rem'
                            }}
                        />
                    </Link>
                </div>
                <div className="card-body "> {post.postBody}</div>
            </div>
        )
    }
}

export default connect(null)(Posts);