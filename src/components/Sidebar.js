import React from "react";

const sidebardata = [
    {
       key: "1",
       title: "Home",
       Link:"" 
    },
    {
        key: "2",
        title: "Team",
        Link:"" 
     },
     {
        key: "3",
        title: "Help",
        Link:"" 
     },

]

function Sidebar(){
    return <div className = "sidebar">
    <div className  = "logoblock">
    <img className = "logo" src="https://static.wixstatic.com/media/1adcde_08b976048fa24d13810b92077fc1fa0b~mv2.png/v1/fill/w_274,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/np%20text%20black.png"/>
    </div>
    <ul className = "sidebarlist">
    {sidebardata.map((x)=>{
        return <li className="row">{x.title}</li>
    })}
    </ul>
    </div>
}

export default Sidebar;