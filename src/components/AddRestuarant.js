import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import db from "../firebase";

function AddRestuarant() {
  const [values, setValues] = useState({ name: "", city: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const collectionref = collection(db, "restuarants");
    const payload = { name: values.name, city: values.city };
    await addDoc(collectionref, payload);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <input
        name="city"
        value={values.city}
        onChange={(e) => setValues({ ...values, city: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddRestuarant;
