import CrudApi from "./components/CrudApi";
// import ConceptosBasicos from "./components/ConceptosBasicos";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <p>
        React Router v6{" "}
        <a
          href="https://reactrouter.com/docs/en/v6"
          target="_blank"
          rel="noreferrer"
          style={{ paddingRight: 0 }}
        >
          Documentation
        </a>
        .
      </p>

      <hr />
      <CrudApi />
      {/* <hr />
      <ConceptosBasicos /> */}
    </div>
  );
}

export default App;
