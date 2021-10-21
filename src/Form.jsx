import "./Form.css"

export const Form = ({ changeFormValue, value, submit }) => {
  return (
    <div className="form">
      <input className="input" type="text" value={value} onChange={changeFormValue}></input>
      <button className="btn" type="submit" onClick={submit}>send</button>
    </div>
  );
};
