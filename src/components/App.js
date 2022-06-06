import React, {useState} from "react";
import ProfileCard from "./ProfileCard"
import memberProfiles from "../profilelists"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Button from "./Button"
import NewProfile from "./NewProfile";

function App() {

  const[buttonPopup, setButtonPopup] = useState(false);


  return (<div>
  <Sidebar/>
    <div className="body">
    <Header/>
    {memberProfiles.map((x) => (<ProfileCard key= {x.id} fName = {x.fName} lName = {x.lName} description = {x.description} image = {x.imageURL}/>) 
    )}
    </div>
    <Button setTrigger={setButtonPopup}/>
    <NewProfile trigger={buttonPopup} setTrigger={setButtonPopup}></NewProfile>
  </div>)
}

export default App;
