import { useEffect, useState } from "react";
import "./index.css";

const SearchButton = () => {
  const [value, setValue] = useState({
    UserSearch:""
  });
  const onSubmitBtn = () => {
    alert("Hello" + value.UserSearch);
  };
  const userValue = (event) => {
    if(event.key === "Enter"){
      onSubmitBtn();
    }
    else{
      setValue({UserSearch:event.target.value})
    }
  };
  return (
    <>
      <input  type="search" value={value.UserSearch} onChange={userValue} onKeyDown={userValue} />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={onSubmitBtn}
      >
        Submit
      </button>
    </>
  );
};

export default SearchButton;
