import React, { useState } from "react";
import style1 from "./styles";
import Page07 from "./Page07";

function App () {
  const [touch1, setTouch1] = useState(0); 
  const [touch2, setTouch2] = useState(0);
  const [touch3, setTouch3] = useState(0);
  const [touch4, setTouch4] = useState(0); 
  const [touch5, setTouch5] = useState(0); 
  const [touch6, setTouch6] = useState(0);
  const [touch7, setTouch7] = useState(0);
  const [touch8, setTouch8] = useState(0);
  const Pass = () => {
    let D1 = touch1 === 2 ? 1 : 0;
    let D2 = touch2 === 2 ? 1 : 0;
    let D3 = touch3 === 2 ? 1 : 0;
    let D4 = touch4 === 1 ? 1 : 0;
    let D5 = touch5 === 1 ? 1 : 0;
    let D6 = touch6 === 2 ? 1 : 0;
    let D7 = touch7 === 1 ? 1 : 0;
    let D8 = touch8 === 1 ? 1 : 0;
    if (D1 + D2 + D3 + D4 + D5 + D6 + D7 + D8 === 8) {
      return <Page07 />;
    }
    return null;
  };
      const hClick1 = () => {
    setTouch1((prevTouch) => (prevTouch + 1) % 3);};
      const getIS1 = (base) => {
    switch (touch1) {
      case 0:
        return base;
      case 1:
        return "https://imgur.com/4BbTpHD.png";
      case 2:
        return "https://imgur.com/3EuQlLY.png";
      default:
        return base;
     }}
      const hClick2 = () => {
      setTouch2((prevTouch) => (prevTouch + 1) % 3);
    };
      const getIS2 = (base) => {
      switch (touch2) {
        case 0:
          return base;
        case 1:
          return "https://imgur.com/4BbTpHD.png";
        case 2:
          return "https://imgur.com/3EuQlLY.png";
        default:
          return base;
      }};
    const hClick3 = () => {
      setTouch3((prevTouch) => (prevTouch + 1) % 3);};
        const getIS3 = (base) => {
      switch (touch3) {
        case 0:
          return base;
        case 1:
          return "https://imgur.com/4BbTpHD.png";
        case 2:
          return "https://imgur.com/3EuQlLY.png";
        default:
          return base;
       }};
       const hClick4 = () => {
        setTouch4((prevTouch) => (prevTouch + 1) % 3);};
          const getIS4 = (base) => {
        switch (touch4) {
          case 0:
            return base;
          case 1:
            return "https://imgur.com/4BbTpHD.png";
          case 2:
            return "https://imgur.com/3EuQlLY.png";
          default:
            return base;
         }}
         const hClick5 = () => {
          setTouch5((prevTouch) => (prevTouch + 1) % 3);};
            const getIS5 = (base) => {
          switch (touch5) {
            case 0:
              return base;
            case 1:
              return "https://imgur.com/4BbTpHD.png";
            case 2:
              return "https://imgur.com/3EuQlLY.png";
            default:
              return base;
           }}
           const hClick6 = () => {
            setTouch6((prevTouch) => (prevTouch + 1) % 3);};
              const getIS6 = (base) => {
            switch (touch6) {
              case 0:
                return base;
              case 1:
                return "https://imgur.com/4BbTpHD.png";
              case 2:
                return "https://imgur.com/3EuQlLY.png";
              default:
                return base;
             }}
             const hClick7 = () => {
              setTouch7((prevTouch) => (prevTouch + 1) % 3);};
                const getIS7 = (base) => {
              switch (touch7) {
                case 0:
                  return base;
                case 1:
                  return "https://imgur.com/4BbTpHD.png";
                case 2:
                  return "https://imgur.com/3EuQlLY.png";
                default:
                  return base;
               }}
               const hClick8 = () => {
                setTouch8((prevTouch) => (prevTouch + 1) % 3);};
                  const getIS8 = (base) => {
                switch (touch8) {
                  case 0:
                    return base;
                  case 1:
                    return "https://imgur.com/4BbTpHD.png";
                  case 2:
                    return "https://imgur.com/3EuQlLY.png";
                  default:
                    return base;
                 }}; 
      
               return (
    <div style={style1.gBox}>
      신체활동 기준 기억하기
      <header style={style1.fBox}>
       앞서 기억해둔 신체활동 기준 에서 중간 강도
       운동에서는 동그라미 표시를 하고 유산소 운동에는 세모 표시를 하세요.
      <p style={style1.eBox}>
        <p style={style1.cBox}>

        <button onClick={hClick1} style={style1.dButtom}>
          
          <img 
              style={style1.dButtom}
              src={getIS1("https://imgur.com/v3fP1vU.png")} 
           />
         </button>

         <button onClick={hClick2} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS2("https://imgur.com/mbXgTD7.png")}/>
           </button>
           <button onClick={hClick3} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS3("https://imgur.com/v9LIZsM.png")}/>
           </button>
          <button onClick={hClick4} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS4("https://imgur.com/u2izNZg.png")}/>
           </button>  
        </p> 
        <p style={style1.cBox}>
        <button onClick={hClick5} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS5("https://imgur.com/X7bCXd4.png")}/>
        </button>
          <button onClick={hClick6} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS6("https://imgur.com/K63Nie8.png")}/>
           </button>
           <button onClick={hClick7} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS7("https://imgur.com/qA7mnJg.png")}/>
              </button> 
              <button onClick={hClick8} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS8("https://imgur.com/dEq9wwC.png")}/>
           </button>            
        </p>
                <Pass></Pass>
      </p>
      </header>
    </div>
  );
}

export default App;
