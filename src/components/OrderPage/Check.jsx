import "./Check.css";

function Check({ htmlFor, id, label }) {
  return (
    <label htmlFor={htmlFor}>
      <input type="checkbox" id={id} /> {label}
    </label>
  );
}

export default Check;
