import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../context/GithubContext";
import AlertContext from "../../context/AlertContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clear } = useContext(GithubContext);
  const { alert, setAlert } = useContext(AlertContext);
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter anything", "Error");
    } else {
      searchUsers(text);
      setText("");
    }
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mb-8 gap-8">
      <div className="md:col-start-2 md:col-end-4">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;