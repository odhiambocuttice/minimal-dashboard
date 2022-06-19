import React from "react";
import { DataContext } from "../context/DataContext";

export const UpdateProfile = () => {
  const { UpdateProfile } = React.useContext(DataContext);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    UpdateProfile(firstName, lastName);
  };

  return (
    <div>
      <form>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" onChange={(e) => setLastName(e.target.value)} />

        <button onClick={(e) => handleUpdate(e)} type="submit">
          Update
        </button>
      </form>
    </div>
  );
};
