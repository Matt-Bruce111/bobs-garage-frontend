// use rafce to create our component
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Import componenets
import Banner from '../layout/Banner'
import SinglePost from '../blog/SinglePost'

// Import actions
import { getPosts } from '../../actions/blogActions'

const Posts = ({ getPosts, postsList, loading }) => {
  // Call the get posts action
   useEffect(() => {
     getPosts()
  }, [ getPosts ])

  // Get the state
  const state = useSelector(state => state);

  // Get the users access level
  var isAdmin;
  console.log(state)
  if(state.auth.user != null){
    isAdmin = state.auth.user.isAdmin;
  }

  // If user is an admin, show add service button
  var addPostButton;
  if(isAdmin){
    addPostButton = <Link to="/blog/add" className="btn add-content-button d-flex justify-content-center mx-auto my-4" style={{width: '200px'}}><p className='fs-4 text-white my-0'>New Post</p></Link>
  }

  return loading ? (
    <h2>Loading....</h2>
  ) : (
    <div>
      <Banner img={'https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} text='Blog'/>
      {
        postsList.map(post => {
          return <SinglePost key={post.postId} singlePost={post}/>
        })
      }

      {addPostButton}
      
    </div>
  )
}

// Proptypes
Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  postsList: PropTypes.array.isRequired,
}

// Map state to props
const mapStateToProps = state => ({
  postsList: state.blog.postsList,
  loading: state.blog.loading
})

export default connect(mapStateToProps, { getPosts })(Posts)