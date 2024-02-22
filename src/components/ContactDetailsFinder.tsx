import { useState } from "react";
import CustomButton from "./CustomButton";
import LabeledInput from "./LabeledInput";
import { BASE_HOST } from "../config/Config";

export type Contact = {
  name: string;
  phoneNumber: string;
}
const ContactDetailsFinder = () => {
    const [id, setId] = useState();
    const [result, setResult] = useState<Contact>(
      {
        name: "",
        phoneNumber: ""
      }
    );

    const find = (e: any) => {
      e.preventDefault();
      fetch(`${BASE_HOST}/contacts/${id}`)
      .then(r => r.json())
      .then(d => {
        setResult(d);
      }).catch((err) => {
        console.log(err);
        alert("Not Found!")
        setResult({
          name: "",
          phoneNumber: ""
        })
      })
    }

    return (
      <div>
        <h3>Find Contact Details</h3>
        <form onSubmit={find}>
            <LabeledInput type="number" label="ID" value={id} handler={(e: any) => setId(e.target.value)}/>
            <CustomButton>Find</CustomButton>
            <LabeledInput required label="Name" value={result.name} disabled/>
            <LabeledInput required label="Phone Number" value={result.phoneNumber} disabled/>
        </form>
      </div>
    );
  }

export default ContactDetailsFinder;