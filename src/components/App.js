import React from "react";
import ProfileCard from "./ProfileCard"
import memberProfiles from "../profilelists"
import Header from "./Header"

function App() {
  return (<div>
  <Header/>
  {memberProfiles.map((x) => (<ProfileCard key= {x.id} fName = {x.fName} lName = {x.lName} description = {x.description} image = {x.imageURL}/>) 
  )}
  </div>)
}

export default App;
