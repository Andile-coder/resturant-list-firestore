import React, { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  deleteDoc,
  doc,
  query,
  where,
  getDocs,
  setDoc,
} from "firebase/firestore";
import db from "../firebase";

function Restuarant() {
  const [restuarants, setRestuarants] = useState([]);

  function getResturants() {
    onSnapshot(collection(db, "restuarants"), (snapshot) => {
      setRestuarants(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }
  const handleDelete = async (id) => {
    const docRef = doc(db, "restuarants", id);
    await deleteDoc(docRef);
  };
  const handleEdit = async (id) => {
    const name = prompt("enter name");
    const city = prompt("enter city");
    const docRef = doc(db, "restuarants", id);
    const payload = { name: name, city: city };
    await setDoc(docRef, payload);
  };
  const handleQueryDelete = async () => {
    const name = prompt("enter name");
    const collectionref = collection(db, "restuarants");
    const q = query(collectionref, where("name", "==", name));
    const snapshot = await getDocs(q);
    console.log(snapshot);
    const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    results.forEach(async (result) => {
      const docRef = doc(db, "restuarants", result.id);
      await deleteDoc(docRef);
    });
  };

  useEffect(() => getResturants(), []);
  return (
    <div>
      <button onClick={() => handleQueryDelete()}>Query Delete</button>
      {restuarants.map((res) => (
        <div key={res.id}>
          <div>{res.name}</div>
          <div>{res.city}</div>
          <button onClick={() => handleDelete(res.id)}>Delete</button>
          <button onClick={() => handleEdit(res.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default Restuarant;
