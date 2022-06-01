import React from "react"

function ProfileCard(memberInfo){
    const {fName, lName, description, image} = memberInfo;
    return (
    <div className="profileCard">
    <img src={image} alt={fName}/>
    <h2> {fName} {lName}</h2>
     <p>{description}</p>
    </div>
    );
}

export default ProfileCard;
