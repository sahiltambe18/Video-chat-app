import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';


const App = () => {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-3xl font-bold'>Video Chat</h3>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  )
}

export default App;
