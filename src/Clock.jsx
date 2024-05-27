import React from 'react';
// import { useEffect, useState } from 'react';
import './App.css';

// const [date, setDate] = useState(new Date());
// const date = new Date();
// const rootStyle = document.documentElement.style;
// const time = {
//                 hh: date.getHours(),
//                 mm: date.getMinutes(),
//                 ss: date.getSeconds() 
//             };
// const degSec = time.ss * (360 / 60);

const Marks = ({angle, type}) => {
    return (
        <div 
            className={`clock-face-mark clock-face-mark--${type}`}
            style={{transform: `rotate(${angle}deg)`, height: '500px'}}
        >
            <div style={{width: type === "hour" ? "8px" : "4px", height: type === "hour" ? "40px" : "20px", backgroundColor: '#ffd700', clipPath: 'polygon(0% 0%,30% 100%, 70% 100%, 100% 0%)'}} />
        </div>
    );
};

// const currentTime = () => {
//         //     // const date = new Date();
//         //     // const rootStyle = document.documentElement.style;
//             // const time = {
//             //     hh: date.getHours(),
//             //     mm: date.getMinutes(),
//             //     ss: date.getSeconds() 
//             // };
//             // const degSec = time.ss * (360 / 60);
//             // rootStyle.setProperty("--degSec", `${degSec}deg`);
//             // const degSec = time.ss * (360 / 60);
//             // rootStyle.setProperty("--degSec", `${degSec}deg`)

//             return(
//                 <div>
//                     {rootStyle.setProperty("--degSec", `${degSec}deg`)}
//                     <p>ただいまの時刻は{time.hh}:{time.mm}:{time.ss}です</p> 
//                     {console.log("test")}
//                 </div>               
//             );
//         };
        
        // setInterval(currentTime, 1000);

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         hh: date.getHours(),
    //         mm: date.getMinutes(),
    //         ss: date.getSeconds() 
    //     };
    // }

    render() {
        const renderFaceMarks = () => {
            const marks = [];
            for(let i = 1; i <= 60; i++) {
                marks.push(<Marks angle={i * 6} type={i % 5 === 0 ? "hour" : "minute"} />)
            }
            return marks;
        }

        // const [date, setDate] = useState(new Date());
        // useState, which is one of React Hooks components can't be called in a class component


        const currentTime = () => {
            const date = new Date();
            const rootStyle = document.documentElement.style;
            const time = {
                hh: date.getHours(),
                mm: date.getMinutes(),
                ss: date.getSeconds() 
            };
            const nowTime = <p style={{color: '#ffd700'}}>{time.hh}:{time.mm}:{time.ss}</p>;
            // const root = document.getElementById("root");
            const degSec = time.ss * (360 / 60);
            // document.getElementById('currentTimeNow').innerHTML = nowTime;

            return (
                <div>
                    {rootStyle.setProperty("--degSec", `${degSec}deg`)}
                    {/* <p style={{color: '#ffd700', }}>{time.hh}:{time.mm}:{time.ss}</p> */}
                    {/* <div className='currentTimeNow'>{nowTime}</div> */}
                    {/* {requestAnimationFrame(currentTime)} */}
                    
                </div>
            );
        };

        // const degSec = this.state.ss * (360 / 60);
        // rootStyle.setProperty("--degSec", `${degSec}deg`);
        setInterval(currentTime, 1000);


        return(
            <div className='App'>
                <div className="circle"></div>
                <div className='background'></div>
                <div className="inner">
                    <div className='center'></div>
                    <div className='circumference'></div>
                    <div className='second-hand'><span className='triangle-right'></span><span className='triangle-left'></span></div>
                    <div className='clock-face'>
                    {renderFaceMarks()}
                </div>

                <div className='circle-text'><p>Ⅻ</p><p>Ⅵ</p></div>
                {/* <div className='currentTimeNow'></div> */}
                {/* {currentTime()} */}
                    {/* <p>ただいまの時刻は{this.state.hh}:{this.state.mm}:{this.state.ss}です</p> */}
                </div>
            </div>
        )
    }
}

// setInterval(currentTime, 1000);

export default Clock;