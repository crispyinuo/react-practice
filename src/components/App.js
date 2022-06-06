import React, {useState} from "react";
import ProfileCard from "./ProfileCard"
import members from "../profilelists"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Button from "./Button"
import NewProfile from "./NewProfile";

function App() {

  const[buttonPopup, setButtonPopup] = useState(false);
  const[memberProfiles, setmemberprofiles] = useState(members);

  function addProfile(firstname, lastname, descriptions, image){

      if(firstname&&lastname&&descriptions&&image){
        let l = memberProfiles.length;
        memberProfiles.push(
          {
            id: l+1,
            fName: firstname,
            lName: lastname,
            imageURL: image,
            description: descriptions
        })
  
        setmemberprofiles(memberProfiles);
  
        console.log(memberProfiles);
      }
  }


  return (<div>
  <Sidebar/>
    <div className="body">
    <Header/>
    {memberProfiles.map((x) => (<ProfileCard key= {x.id} fName = {x.fName} lName = {x.lName} description = {x.description} image = {x.imageURL}/>) 
    )}
    </div>
    <Button setTrigger={setButtonPopup}/>
    <NewProfile trigger={buttonPopup} setTrigger={setButtonPopup} addProfile={addProfile}></NewProfile>
  </div>)
}

export default App;
