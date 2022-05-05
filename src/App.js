import React, { useState } from "react";
import "./App.css";

function App() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState("");

  const [fnameErr, setFnameErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);
  const [phoneErr, setPhoneErr] = useState(null);
  const [cityErr, setCityErr] = useState(null);
  const [genderErr, setGenderErr] = useState(null);
  const [hobbiesErr, setHobbiesErr] = useState(null);

  const checkFname = (e) => {
    const fname = e.target.value;
    if (fname.length < 3) {
      setFnameErr("minimum 3 characters required");
    } else {
      setFnameErr(null);
    }
    setFname(fname);
  };

  const checkEmail = (e) => {
    const email = e.target.value;
    const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regExp.test(email) === false) {
      setEmailErr("invalid email address");
    } else {
      setEmailErr(null);
    }
    setEmail(email);
  };

  const checkPhone = (e) => {
    const phone = e.target.value;
    const regExp = /^[a-zA-Z\s]+$/;
    if (regExp.test(phone) === true) {
      setPhoneErr("only numbers are allowed ");
    } else if (phone.length < 10) {
      setPhoneErr("invalid phone number");
    } else {
      setPhoneErr(null);
    }
    setPhone(phone);
  };

  const checkCity = (e) => {
    const city = e.target.value;
    if (city === "City") {
      setCityErr("please select your city");
    } else {
      setCityErr(null);
    }
    setCity(city);
  };

  const checkGender = (e) => {
    const gender = e.target.value;
    if (e.target.checked) {
      setGenderErr(null);
    } else {
      setGenderErr("please select your gender");
    }
    setGender(gender);
  };

  const checkHobbies = (e) => {
    let hobbyList = [...hobbies];
    if (e.target.checked) {
      hobbyList = [...hobbies, e.target.value];
    } else {
      hobbyList.splice(hobbies.indexOf(e.target.value), 1);
    }
    if (!hobbyList) {
      setHobbiesErr("please select your hobbies");
    } else {
      setHobbiesErr(null);
    }
    setHobbies(hobbyList);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (
      fname.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      city.length === 0 ||
      gender.length === 0 ||
      hobbies.length === 0
    ) {
      setFnameErr("please enter a full name");
      setEmailErr("please enter an email address");
      setPhoneErr("please enter a phone number");
      setCityErr("please select your city");
      setGenderErr("please select your gender");
      setHobbiesErr("please select your hobbies");
    }
    console.log(fname, email, phone, city, gender, hobbies);
    setFname("");
    setEmail("");
    setPhone("");
    setCity("");
    setGender("");
    setHobbies("");
    e.target.reset();
  };

  return (
    <div className="container">
      <form onSubmit={formSubmit}>
        <h2>
          <center>
            <u>Application Form</u>
          </center>
        </h2>
        <div className="item">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            id="name"
            value={fname}
            onChange={checkFname}
          />
          <div className="error">{fnameErr}</div>
        </div>

        <div className="item">
          <label>E-mail</label>
          <input
            type="text"
            placeholder="E-mail"
            id="email"
            value={email}
            onChange={checkEmail}
          />
          <div className="error">{emailErr}</div>
        </div>

        <div className="item">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            id="phone"
            maxLength={10}
            value={phone}
            onChange={checkPhone}
          />
          <div className="error">{phoneErr}</div>
        </div>

        <div className="item">
          <label>City</label>
          <select id="city" value={city} onChange={checkCity}>
            <option>--Select</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
          <div className="error">{cityErr}</div>
        </div>

        <div className="item">
          <hr></hr>
          <label>Gender</label>
          <hr></hr>
          <div onChange={checkGender}>
            <input type="radio" name="gender" id="gender" value="male" />
            Male
            <input type="radio" name="gender" id="gender" value="female" />
            Female
            <input type="radio" name="gender" id="gender" value="transgender" />
            Transgender
          </div>
          <div className="error">{genderErr}</div>
        </div>

        <div className="item">
          <hr></hr>
          <label>Hobbies</label>
          <hr></hr>
          <div onChange={checkHobbies}>
            <input type="checkbox" name="hobbies" id="hobbies" value="music" />
            Music
            <input type="checkbox" name="hobbies" id="hobbies" value="dance" />
            Dance
            <input type="checkbox" name="hobbies" id="hobbies" value="other" />
            Other
          </div>
          <div className="error">{hobbiesErr}</div>
        </div>

        <div className="item">
          <input type="submit" className="button" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
