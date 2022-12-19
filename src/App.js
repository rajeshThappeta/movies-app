import "./App.css";
import Home from './components/home/Home'
import {createBrowserRouter, createHashRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/layout/Layout';
import MovieList from './components/movieslist/MoviesList'
import MovieInfo from './components/movieinfo/MovieInfo'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<MovieList />
        },
        {
          path:"/movie-info/:title",
          element:<MovieInfo />
         
        
        },
        
      ]
    }
  ])
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
