import React, { useEffect, useState } from 'react';
import Clock from 'react-live-clock';
// import Clock from 'react-live-clock';


const Time = () => {
    
    // const [time, setTime] = useState()
    // const live = () => {
    //     var d = new Date();
    //     var s = d.getSeconds();
    //     var m = d.getMinutes();
    //     var h = d.getHours();
    //     setTime(("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2));
    //   }
    //   setInterval(
    //     useEffect(() => {
    //         // var dateString = new Date().toLocaleTimeString("en-US", {timeZone: "Asia/Dhaka"});
    //         // var formattedString = dateString.replace(", ", " - ");
    //         // setTime(dateString);
    //         // setInterval(1000);
    //         live()
    //     }, []),
    //       1000
    //       );
   
    
    
    return (
        <div>
            {/* <h6>{time}</h6> */}
            <Clock
        //   className={css.ukFormat}
          format={'h:mm:ssa'}
          style={{fontSize: '1.3em'}}
          ticking={true} 
          />
        </div>
    );
};

export default Time;