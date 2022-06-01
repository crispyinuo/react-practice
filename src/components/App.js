import React from "react";
import ProfileCard from "./ProfileCard"
import memberProfiles from "../profilelists"
import Header from "./Header"
import Sidebar from "./Sidebar"

function App() {
  return (<div>
  <Sidebar/>
    <div className="body">
    <Header/>
    {memberProfiles.map((x) => (<ProfileCard key= {x.id} fName = {x.fName} lName = {x.lName} description = {x.description} image = {x.imageURL}/>) 
    )}
    </div>
  </div>)
}

export default App;
