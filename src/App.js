import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import our provider from react-redux.
import { Provider } from 'react-redux';
// import our store.
import store from './store';
import './App.css';

// Import layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';

// Import pages components
import Services from './components/pages/Services';
import Feedback from './components/pages/Feedback';
import Posts from './components/pages/Posts';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import About from './components/pages/About';

// Import auth components
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Import service components
import AddService from './components/services/AddService';
import EditService from './components/services/EditService';

// Import feedback components
import AddFeedback from './components/feedback/AddFeedback';
import EditFeedback from './components/feedback/EditFeedback';

// Import blog components
import AddPost from './components/blog/AddPost';
import EditPost from './components/blog/EditPost';


// #### Moved setAuthToken to root to stop it from being overidden on refresh
// Import setAuthToken
import setAuthToken from './utils/setAuthToken'
import NotFound from './components/pages/NotFound';
// Check if there is a token in local storage, if so set it in the headers
if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='container-lg min-vh-100'>
          <Header />
          <Alert />
          <Routes>
            {/* Static Routes */}
            <Route path='home' element={<Home />}/>
            <Route path='staff' element={<Staff />}/>
            <Route path='about' element={<About />}/>
            <Route path='*' element={<NotFound />}/>

            {/* Service Routes */}
            <Route path='services'element={<Services />}/>
            <Route path='services/add' element={<AddService />}/>
            <Route path='api/services/:id' element={<EditService />}/>

            {/* Feedback Routes */}
            <Route path='feedback' element={<Feedback />}/>
            <Route path='feedback/add' element={<AddFeedback />}/>
            <Route path='feedback/edit/:id' element={<EditFeedback />}/>

            {/* Blog Routes */}
            <Route path='blog' element={<Posts />}/>
            <Route path='blog/add' element={<AddPost />}/>
            <Route path='blog/edit/:id' element={<EditPost />}/>

            {/* Auth Routes */}
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;