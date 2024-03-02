import Header from './Header'
import useNowPlayingMovies from '../hook/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  useNowPlayingMovies();
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
