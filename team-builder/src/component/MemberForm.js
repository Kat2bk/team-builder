import React, {useState} from "react";
import Members from "./Members";

export default function MemberForm(props) {
    console.log("I am props from memberform", props);
    const [form, SetForm] = useState({
        name: "",
        age: "",
        position: ""
    });

   
    return (
        <form>
            <p>Enter your data below:</p>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name"/>
            <label htmlFor="age">Age</label>
            <input id="age" name="age"/>
            <label htmlFor="position">Position</label>
            <input id="position" type="text" name="position" />
        </form>
    )

}

