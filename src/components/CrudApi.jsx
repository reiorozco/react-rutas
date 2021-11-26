import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import Error404 from "../routes/Error404";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

export default function CrudApi() {
  const [database, setDatabase] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/mockData";

  useEffect(() => {
    setLoading(true);

    helpHttp()
      .get(url)
      .then((res) => {
        // console.log(res);
        if (!res.err) {
          setDatabase(res);
          setError(null);
        } else {
          setDatabase(null);
          setError(res);
        }

        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    // console.log(data);
    // data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    data.id = database.length + 1;

    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDatabase([...database, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        let newData = database.map((el) => (el.id === data.id ? data : el));
        setDatabase(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar el registro con el id "${id}"`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        console.log(res);
        if (!res.err) {
          let newData = database.filter((el) => el.id !== id);
          setDatabase(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <HashRouter>
        <header>
          <h2>CRUD API with Routes</h2>
          <nav>
            <button>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
              >
                Data Table
              </NavLink>
            </button>
            <button>
              <NavLink
                to="/add"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
              >
                Add
              </NavLink>
            </button>
          </nav>
        </header>
        <Routes>
          <Route
            index
            element={
              <>
                {loading && <Loader />}
                {error && (
                  <Message
                    message={`Error ${error.status}: ${error.statusText}`}
                    bgColor="#dc3545"
                  />
                )}
                {database && (
                  <CrudTable
                    data={database}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                  />
                )}
              </>
            }
          />
          <Route
            path="/add"
            element={
              <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              />
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
