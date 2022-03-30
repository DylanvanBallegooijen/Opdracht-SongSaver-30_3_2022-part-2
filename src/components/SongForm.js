import React from "react";

function SongForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" name="title" placeholder="title" />
        <br />
        <input type="text" name="artist" placeholder="artist" />
        <br />
        <select name="genre" placeholder="select genre...">
          <option value="select">genre</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="soul">Soul</option>
          <option value="classics">Classics</option>
        </select>
        <br />
        <select name="rating" placeholder="please rate">
          <option value="0">rate</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default SongForm;