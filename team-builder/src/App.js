import React, {useState} from "react";
import "./App.css";
import MemberForm from "./component/MemberForm";
import Members from "./component/Members";

function App() {
  const [members, SetMembers] = useState([
    {
      id: 1,
      name: "Maximillion",
      age: 20,
      position: "Front-end"
    },
    {
      id: 2,
      name: "Kayla",
      age: 25,
      position: "Back-end"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      age: member.age,
      position: member.position
    };
    SetMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>Teammate List</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;
