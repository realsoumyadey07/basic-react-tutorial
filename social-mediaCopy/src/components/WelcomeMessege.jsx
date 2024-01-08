import React from "react";

export default function WelcomeMessege({onGetPostClick}) {
  return (
    <center className="my-5">
      <h1>There are no posts</h1>
      <button onClick={onGetPostClick} type="button" className="btn btn-primary my-3">
        Get posts from server
      </button>
    </center>
  );
}
