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
    <h1>NextPlate</h1>
    <ul>
    {sidebardata.map((x)=>{
        return <li className="row">{x.title}</li>
    })}
    </ul>
    </div>
}

export default Sidebar;