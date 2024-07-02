import {createBrowserRouter} from 'react-router-dom';
import Home from './pages/home/index';
import TvSeries from './pages/tv-series';
import Movie from './pages/movie';
import Bookmark from './pages/bookmark';
import Error from './error/index';


export const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />,
    errorElement: <Error />
  },
  {
    path:'/movie',
    element:<Movie />,
    errorElement: <Error />
  },
  {
    path:'/tv-series',
    element:<TvSeries />,
    errorElement: <Error />
  },
  {
    path:'/bookmarks',
    element:<Bookmark />,
    errorElement: <Error />
  }
])