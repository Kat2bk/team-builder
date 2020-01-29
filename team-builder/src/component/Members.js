import React from "react";

export default function Members(props) {
    console.log("I am members props", props)
    return (
        <div className="list">
        {props.members.map(member =>(
            <div className="member" key={member.id}>
                <h2>{member.name}</h2>
                <h2>{member.age}</h2>
                <h2>{member.position}</h2>
                </div>
        ))}
         </div>
    )
}