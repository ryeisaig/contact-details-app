import { useState } from "react";
import { BASE_HOST } from "../config/Config";
import CustomButton from "./CustomButton";
import LabeledInput from "./LabeledInput";

const CreateContactDetailsForm = () => {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const save = async (e: any) => {
      e.preventDefault();
      fetch(`${BASE_HOST}/contacts`, {
        method: "POST", 
        body: JSON.stringify({
          name: name,
          phoneNumber: phoneNumber
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((r: any) => r.json())
      .then((d: any) => {
        alert("Created ID is: " + d);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      })
    }

    return (
      <div>
        <h3>Save Contact Details</h3>
        <form onSubmit={save}>
            <LabeledInput required label="Name" value={name} handler={(e: any) => setName(e.target.value)}/>
            <LabeledInput required label="Phone Number" value={phoneNumber} handler={(e: any) => setPhoneNumber(e.target.value)}/>
            <CustomButton>Save</CustomButton>
        </form>
      </div>
    );
  }

export default CreateContactDetailsForm;