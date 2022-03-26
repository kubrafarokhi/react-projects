import React, { useState } from "react";

function Post() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState('');
  const [selectedValue, setSelectedValue] = useState('grapefruit');
  const [isGoing, setIsGoing] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName)
    console.log(gender)
    console.log(selectedValue)
    console.log(isGoing)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-div">
          <label>FirstName</label>
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-div">
          <label>LastName</label>
          <input
            type="text"
            value={lastName}
            name="firstName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-div">
          <label>Gender</label>
          Male:
          <input
            type="radio"
            checked={gender ==='Male'}
            value={gender}
            name="Male"
            onChange={(e) => setGender('Male')}
          />
          Female:
          <input
            type="radio"
            checked={gender ==='Female'}
            value={gender}
            name="Female"
            onChange={(e) => setGender('Female')}
          />
        </div>
        <div className="form-div">
          <label>Is Going</label>
          <input
            type="checkbox"
            value={isGoing}
            name='isGoing'
            onChange={(e) => setIsGoing(!isGoing)}
          />
        </div>
        <div className="form-div">
          <label>
            Pick your favorite flavor:
            {/* <select multiple={true} value={['B', 'C']}></select> */}
            <select value={selectedValue} onChange={(e)=>setSelectedValue(e.target.value)}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Post;
