import React, {useState, useRef, useEffect} from 'react';
import './countDownTimer.css';

const CountDownTimer = props => {
    const [tickerVisible, setTickerVisible] = useState(true)
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    const toggleText = tickerVisible ? 'Hide Clock' : 'Show Clock';

    let interval = useRef();

    const startTimer = () =>{
        const countDownDate  = new Date('March 30, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) /(1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                //stop timer;
                clearInterval(interval.current)
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000)
    }

    useEffect(()=>{
        startTimer();
        return () =>{
            clearInterval(interval.current)
        }
    })
    
    return (
    <>
       { tickerVisible && 
            <div className='center-container'>
                <h2>Clock</h2>
                <section className='clock-container'>
                    <div>
                        <p>{timerDays}</p>
                        <small>Days</small>
                    </div>
                    <span>:</span>
                    <div>
                        <p>{timerMinutes}</p>
                        <small>Minutes</small>
                    </div>
                    <span>:</span>
                    <div>
                        <p>{timerHours}</p>
                        <small>Hours</small>
                    </div>
                    <span>:</span>
                    <div>
                        <p>{timerSeconds}</p>
                        <small>Seconds</small>
                    </div>
                </section>
            </div>
       }
            <button className='button-class' onClick ={()=>setTickerVisible(prev => !prev)}>
                {toggleText}
             </button>
        </>

    )
}


export default CountDownTimer;