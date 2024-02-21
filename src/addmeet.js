import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Addmeet=()=>{
   const Navgate=useNavigate()
   const [alert,setalert]=useState()
   const [btn,setbtn]=useState("Add Meet")
   const Title=useRef()
   const Image=useRef()
   const Date=useRef()
   const Disc=useRef()

   function pushData(){
   const TitleName=Title.current.value
   const ImageName=Image.current.value
   const DateTime=Date.current.value
   const Discription=Disc.current.value
   if(TitleName ==''|| ImageName ==''|| DateTime =='' || Discription ==''){
   const showAlert="Please fill all the feilds!!"
   setalert(showAlert)
   }
   else{
      const MeetObject={
         meetName:TitleName,
         meetImg:ImageName,
         meetTime:DateTime,
         meetInfo:Discription,
    }
       fetch("https://shedlule-default-rtdb.firebaseio.com/newapp.json",{
          method:'post',
          body:JSON.stringify(MeetObject)
       }).then(()=>{
          const btnNew="Added✌️"
          setbtn(btnNew)
          const Empty=''
          setalert(Empty)
          Navgate()
       })
   }
 
}
    return <div className="a-meet">
       <div className="meet-container">
         <h1>Add Your Meeting details</h1>
        <input className="u-data" type="text" placeholder="Enter meet name..." ref={Title}></input>
        <input className="u-data" type="text" placeholder="Enter image name..." ref={Image}></input>
        <input className="u-data" type="datetime-local" ref={Date}></input>
        <textarea className="text" rows='3' cols='50' placeholder="Enter Yhour discription..." ref={Disc}></textarea>
        <p className="alert">{alert}</p>
        <button className="btn" onClick={pushData}>{btn}</button>
       </div>
    </div>
   }
export default Addmeet;