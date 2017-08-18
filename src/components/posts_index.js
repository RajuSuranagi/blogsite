import React, { Component }from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

    // This is a life-cycle method  given by react - this will be called when the component is about to be rendered
    componentWillMount() {
        console.log('this will be a good time to call an action creator to fetch teh posts');
        const posts = this.props.fetchPosts();
        console.log('Posts in componentMount: '+posts.length);
    }

    renderPosts(){
        console.log('Number of posts: '+this.props.posts.length);
        return (this.props.posts.map( (post) => {
            console.log(post.id);
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`posts/${post.id}`}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        }))
    }

    render() {
        return (
            <div>
                <div class="text-xs-right">
                    <Link to="posts/new" className="btn btn-primary">
                    Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts.all}
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);
