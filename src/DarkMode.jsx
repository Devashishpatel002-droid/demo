import React, {useState} from 'react'

export default function DarkMode() {
    const[mystyle,setMyStyle]= useState( {
        color:'white',
        backgroundColor:'black'
        
      }) ;
      const[btntext,setBtnText] = useState("Enable Light Mode")
      
     const toggleStyle=()=>{
     if( mystyle.color=='white'){
      setMyStyle({
        color:'black',
        backgroundColor:'white'
      });
      setBtnText("Enable Dark Mode")
    }
      else{
        setMyStyle({
        color:'white',
        backgroundColor:'black'
      });
      setBtnText("Enable Light Mode");
    
      }
       };
  return (
    <div>
      <div className="container my-4"> 
      <button onClick={toggleStyle} type="button" className="theme-primary btn-solid btn-styled">{btntext}</button>
 </div>
    </div>
  )
}
