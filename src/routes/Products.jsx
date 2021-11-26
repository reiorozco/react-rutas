import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function Products() {
  //   let location = useLocation();
  //   console.log(location);

  const LIMIT = 20;
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  //   console.log(query, query.toString());

  let start = parseInt(query.get("start")) || 1,
    end = parseInt(query.get("end")) || LIMIT;
  //   console.log(start, end);

  let navigate = useNavigate();
  //   console.log(navigate);

  const handlePrev = (e) => {
    navigate(`?start=${start - LIMIT}&end=${end - LIMIT}`, { replace: true });
  };
  const handleNext = (e) => {
    navigate(`?start=${start + LIMIT}&end=${end + LIMIT}`, { replace: true });
  };

  return (
    <div>
      <h3>Products</h3>
      <p>
        Showing products for <b>{start}</b> to <b>{end}</b>.
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Previous</button>}
      <button onClick={handleNext} style={{ marginLeft: "0.25rem" }}>
        Next
      </button>
    </div>
  );
}
