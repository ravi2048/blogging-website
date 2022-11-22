import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import UpdatePost from './pages/updatePost';

const Layout = () => {
  return(
    <> 
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/post/:id',
        element: <SinglePost/>
      },
      {
        path: '/create-post',
        element: <CreatePost/>
      },
      {
        path: '/update-post/:id',
        element: <UpdatePost/>
      },
    ]
  }
]);

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
