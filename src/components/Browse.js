import Header from './Header'
import useNowPlayingMovies from '../hook/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useMoviesList from '../hook/useMoviesList';
import { POPULaR_MOVIES, TOP_RATED, UPCOMING } from '../utils/constant';


const Browse = () => {
  useNowPlayingMovies();
  useMoviesList(POPULaR_MOVIES,'popular');
  useMoviesList(TOP_RATED,'top_rated');
  useMoviesList(UPCOMING,'upcoming');

  return (
    <div>
      <Header />
      <div className='top-16'>
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  )
}

export default Browse
