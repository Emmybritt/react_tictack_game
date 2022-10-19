import React, { useState } from "react";

const Forms = () => {
  const [user, setUser] = useState({});
  function handleSubmitForm(e) {
    e.preventDefault()
    alert('i am submitted')
  }
  function handleSetUser(value) {
    console.log(value);
  }
  return (
    <div className="container" style={{ marginTop: 6 }}>
      <h1>Fill in the form</h1>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="name">Enter Your Fullname</label>
          <input onChange={(e) => handleSetUser({name: e.target.value})} value={user.name} className="input" type="text" id="name" />
        </div>
        <div>
          <label htmlFor="age">Enter Your age</label>
          <input onChange={(e) => handleSetUser({age: e.target.value})} value={user.age} className="input" type="text" id="age" />
        </div>
        <div>
          <label htmlFor="name">Enter Your Fullname</label>
          <select name="" value={user.isHappy} id="">
            <option value={true}>true</option>
            <option value={false}>False</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Forms;
