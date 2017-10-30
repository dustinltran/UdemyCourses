import React, {Component} from 'react';
import {fetchPost} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class PostsShow extends Component {
	componentDidMount(){
		//this.props.match.params.id;
		const {id} = this.props.match.params;
		this.props.fetchPost(id);
	}

	render() {
		const {post} = this.props;

		if(!post) {
			return <div>Loading...</div>
		}

		return (
			<div>
				<Link to="/">Back To Index</Link>
				<h3>{post.title}</h3>
				<h6>{post.tags}</h6>
				<p>{post.content}</p>
			</div>

		);
	}
}

function mapStateToProps({posts}, ownProps){
	return {posts: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost})(PostsShow)