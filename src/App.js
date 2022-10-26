import logo from './logo.svg';
import './App.css';
import {useCallback, useContext, useRef} from "react";
import ReactPlayer from "react-player";
import {useState, useEffect} from "react";


function App() {
  const playerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // playerRef.current.seekTo(18.7);
    }, []);

    return (
        <div className="App">
            <ReactPlayer
                ref={playerRef}
                url='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
                className="react-player"
                playing={true}
                controls
                width="50%"
                height="50%"
                // muted={true}
                onError={(error) => console.log('end', error)}
            />
            <br/>

            <br/>
            <button onClick={() => playerRef.current.seekTo(0.9999999)}>Seek to end</button>
            <button onClick={() => playerRef.current.seekTo(0.999)}>
                Seek to end (works in Safari)
            </button>
            <button
                onClick={() => {
                    console.log(playerRef.current.getDuration());
                    this.p.seekTo(playerRef.current.getDuration());
                }}
            >
                Seek to end (with getDuration())
            </button>

            <button onClick={() => playerRef.current.seekTo(12.7)}>Seek to 12.7</button>
            <button onClick={() => playerRef.current.seekTo(42.65)}>Seek to 42.65</button>
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
  );
}

export default App;
