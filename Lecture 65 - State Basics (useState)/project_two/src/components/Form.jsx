import { useState } from "react";
import "../css/form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();

    if (!name || !age || !gender) {
      alert("Enter Full Details");
      return;
    }

    setSubmittedData((prevData) => [
      ...prevData,
      { name, age, gender }
    ]);
    setName("");
    setAge("");
    setGender("");
  };

  return (
    <>
      <form id="form" onSubmit={handleForm}>
        <label>Name</label><br />
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <label>Age</label><br />
        <input
          type="number"
          value={age}
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br /><br />

        <label>Gender</label><br />
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="male">Male</label>

        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="female">Female</label>

        <br /><br />

        <button type="submit">Submit Form</button>
        </form>


      {submittedData.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ textAlign: "center" }}>Submitted Users</h3>

          {submittedData.map((user, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                width: "300px",
                margin: "10px auto",
                borderRadius: "8px",
                boxShadow: "2 3 20px rgba(231, 21, 21, 0.1)",
                backgroundColor:"white"
              }}
            >
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Age:</strong> {user.age}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
            </div>
          ))}
        </div>
      )}

    </>
  );
};

export default Form;
