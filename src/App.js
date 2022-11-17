import logo from './logo.svg';
import './App.css';
import {useCallback, useContext, useRef} from "react";
import  ReactPlayer  from 'react-player';
import {useState, useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker/dist/entry.nostyle'
import { addDays }  from "date-fns";

function App() {
  const playerRef = useRef();
  console.log('player', playerRef)
  const url ='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

  const [isPlaying, setIsPlaying] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [startValue, SetStartOnChange] = useState('');
  const [endValue, SetEndOnChange] = useState('11:00');
  console.log('startValue', startValue)
    console.log('endValue', endValue)
    useEffect(() => {
        // playerRef.current.seekTo(18.7);
    }, []);

  const dayFormat = [{
      id:1,
      video:"2022-11-17/day1",
      day:false
  },
      {
          id:2,
          video:"day2",
          day:true
      },

          {
              id:3,
              video:"day3",
              day:true
          },

  ]

    return (
        <div className="App">
                <ReactPlayer
                              className='react-player'
                              url={url}
                              file='forceVideo'
                              ref={playerRef}
                              playing={false}

                              onDuration={(time) => {console.log('eee', ((time + 603)%3600/60))}}
                              width="50%"
                              height="50%"
                              muted={true}>

                </ReactPlayer>
            <div>00:00</div>
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
            <DatePicker
                locale={ko}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                excludeDates={[addDays(dayFormat.map((i) => i.day === true),0)]}
            />
            <DatePicker
                selected={startValue}
                onChange={(date) =>SetStartOnChange(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={5}
                timeCaption="Time"
                dateFormat="h:mm aa"
            />


        </div>
  );
}

export default App;
