import React, { useState,useEffect } from 'react';
import './_scss/comingsoon.css';
import CompanyLogo from '../assets/companylogo.png';
import { SocialIcon } from 'react-social-icons';


const Coming_Soon = () => {

    let [days,setDays] = useState("00");
    let [hours,setHours] = useState("00");
    let [minutes,setMinutes] = useState("00");
    let [seconds,setSeconds] = useState("00");
    

    const Timer = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`05/29/${year}`) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            let seconds = Math.floor((difference / 1000) % 60);
            if (seconds < 10) {
                seconds = "0"+seconds;
            }
            let days = Math.floor(difference / (1000 * 60 * 60 * 24));
            if (days < 10) {
                days = "0"+days;
            }
            let minutes = Math.floor((difference / 1000 / 60) % 60);
            if (minutes < 10) {
                minutes = "0"+minutes;
            }
            let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            if (hours < 10) {
                hours = "0"+hours;
            }
            timeLeft = {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
        }
        if (difference < 0) {
            timeLeft = {
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00"
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDays(Timer().days)
            setHours(Timer().hours)
            setMinutes(Timer().minutes)
            setSeconds(Timer().seconds)
  }, 1000);
  return () => clearInterval(interval);
    },[])

    return(
        <div>
                <div className="comingsoon-row">
                    <div className="comingsoon-col1">
                    <div className="comingsoon-timer">
                        <div className="comingsoon-days">
                            <div className="comingsoon-days_count">
                                <p>{days}</p>
                            </div>
                            <div className="comingsoon-days_title">
                                <p>Days</p>
                            </div>
                        </div>
                        <div className="comingsoon-hours">
                            <div className="comingsoon-hours_count">
                                <p>{hours}</p>
                            </div>
                            <div className="comingsoon-hours_title">
                                <p>Hours</p>
                            </div>
                        </div>
                        <div className="comingsoon-minutes">
                            <div className="comingsoon-minutes_count">
                                <p>{minutes}</p>
                            </div>
                            <div className="comingsoon-minutes_title">
                                <p>Minutes</p>
                            </div>
                        </div>
                        <div className="comingsoon-seconds">
                            <div className="comingsoon-seconds_count">
                                <p>{seconds}</p>
                            </div>
                            <div className="comingsoon-seconds_title">
                                <p>Seconds</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="comingsoon-col2">
                    <div className="comingsoon-company-img">
                        <img className="logo" src={CompanyLogo} alt="confegure"/>
                    </div>
                    <div className="comingsoon-info">
                        <p className="title1">STAY TUNED</p>
                        <p className="title2">Coming Soon</p>
                    </div>
                    <div className="comingsoon-company-social-info">
                        <p><SocialIcon bgColor="black" url="https://twitter.com/confegure"/></p>
                        <p><SocialIcon bgColor="black" url="https://www.linkedin.com/company/confegure/"/></p>
                        <p><SocialIcon bgColor="black" url="https://www.instagram.com/confegure/"/></p>
                        <p><SocialIcon bgColor="black" url="https://www.facebook.com/Confegure-104724778487036/"/></p>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default Coming_Soon;