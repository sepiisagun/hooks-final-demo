import { useState } from "react";

function UseSate() {
    const [age, setAge] = useState(19);
  return (
    <div className="container">
        Today I am {age} Years of age
        <div className="container">
            <button onClick={() => setAge(age + 1)} type="button" class="btn">Get Older!</button>
            <button onClick={() => setAge(19)} type="button" class="btn">Reset</button>
        </div>
    </div>
  )
}

export default UseSate