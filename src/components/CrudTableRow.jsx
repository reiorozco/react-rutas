import React from "react";
import { useNavigate } from "react-router";

export default function CrudTableRow({ element, setDataToEdit, deleteData }) {
  let { id, firstName, lastName, email } = element;
  let navigate = useNavigate();

  const handleEdit = () => {
    setDataToEdit(element);
    navigate(`/edit/${id}`, { replace: true });
  };

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
}
