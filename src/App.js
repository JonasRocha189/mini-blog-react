import './App.css';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// context
import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';

// hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import CreatePost from './pages/CreatePost/CreatePost';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/EditPost/EditPost';


function App() {

 const [user, setUser] = useState(undefined);
 const {auth} = useAuthentication()

 const loadingUser = user === undefined;

 useEffect(() => {
    onAuthStateChanged(auth, (user)=> {
      setUser(user)
    })
 }, [])

 if(loadingUser) {
  return <p>Carregando...</p>
 }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <Router>
          <Navbar />
            <div className="container">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/search' element={<Search />} />
                <Route path='/post/:id' element={<Post />} />
                <Route path='/login' element={!user ? <Login /> : <NavLink to="/" />} />
                <Route path='/register' element={!user ? <Register /> : <NavLink to="/" />} />
                <Route path='/dashboard' element={user ? <Dashboard /> : <NavLink to="/login" />} />
                <Route path='/post/create' element={user ? <CreatePost /> : <NavLink to="/login" />} />
                <Route path='/post/edit/:id' element={user ? <EditPost /> : <NavLink to="/login" />} />
              </Routes>
            </div>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
