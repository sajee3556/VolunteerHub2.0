import React, {Component} from 'react';
import {connect} from "react-redux";
import {getPosts} from "../actions/volunteerPostsActions";
import Spinner from "../layouts/Spinner";
import Posts from "../Posts/Posts";
import AddPost from "../Posts/AddPost";

class Dashboard extends Component {

    componentDidMount() {
        console.log(this.props);
        this.props.getPosts();
    };

    render() {
        const {posts} = this.props;
        if (posts) {
            return (
                <div>
                    <h1 className="display-4 mb-2">
                        <span className="text-primary">Volunteering Services</span>
                    </h1>
                    <hr/>
                    <AddPost/>
                    <hr/>
                    <div>
                        {posts.map(post => (
                            <Posts key={post.volunteerPostsId} post={post} />
                        ))}
                    </div>
                </div>)
        }else{
            return (
                <Spinner/>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    posts: state.volunteerPosts.posts
});

export default connect(mapStateToProps, {getPosts})(Dashboard);