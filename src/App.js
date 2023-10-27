import "./App.css";
import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // function changeFirstNameHandler(event) {
  //   // console.log(event.target);
  //   console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeLastNameHandler(event) {
  //   // console.log(event.target);
  //   console.log(event.target.value);
  //   setLastName(event.target.value);
  // }
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isAgree: true,
    mode: "",
    Event: ""
  });
  // console.log(formData);
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      // console.log(prevFormData);
      return {
       
        ...prevFormData,  
        
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(event)
  {
    console.log(isAgree);
    event.preventDefault();
    console.log("Form Give DAta")
    console.log(formData);
  }
  return (
    <div className="App">
      <h1>Directorate Of Students Affairs</h1>
      <form onSubmit={submitHandler}>
        <label>FirstName:-</label>
          <input
            type="text"
            placeholder="Enter First name"
            // onChange={changeFirstNameHandler}
            onChange={changeHandler}
            name="firstName"
            value={formData.firstName}
          />

          <br />
          <br />
          <label>LatName:-</label>
          <input
            type="text"
            placeholder="Enter Last name"
            // onChange={changeLastNameHandler}
            onChange={changeHandler}
            name="lastName"
            value={formData.lastName}
          />

          <br />
          <br />
          <label>Email:-</label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={changeHandler}
            name="email"
            value={formData.email}
          />
          <br />
          <br />
          <label>Comments:-</label>
          <textarea
            name="comment"
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your Comments"
            onChange={changeHandler}
            value={formData.value}
          ></textarea>
          <br />
          <br />
          <input
            type="checkbox"
            name="isAgree"
            onChange={changeHandler}
            id="isAgree"
            checked={formData.isAgree}
          />
          <label htmlFor="isAgree">Agree Term and Condition</label>
          <br />
          <br />
          <fieldset> 
          <input
            type="radio"
            name="mode"
            id="Volunteer"
            value="Volunteer"
            onChange={changeHandler}
            checked={formData.mode === "Volunteer"}
          />
          <label htmlFor="Volunteer">Volunteer</label>
          <input
            type="radio"
            name="mode"
            id="Audience"
            value="Audience"
            onChange={changeHandler}
            checked={formData.mode === "Audience"}
          />
          <label htmlFor="Audience">Audience</label>
        </fieldset>
        <label htmlFor="Event">Event You Want to Register</label>
        <select
          name="Event"
          id="Event"
          value={formData.Event}
          onChange={changeHandler}
        >
          <option value="Shuru">Shuru</option>
          <option value="Tarana">Tarana</option>
          <option value="Butterflies"> Butterflies</option>
          <option value="Jhalak">Jhalak</option>
          <option value="Milan" selected>Milan</option>
        </select>
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
