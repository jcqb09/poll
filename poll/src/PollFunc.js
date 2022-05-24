import React, { useState, useRef } from 'react'
import { TextField } from '@mui/material';

export default function PollFunc() {
    const [clicked, setClicked] = useState(false);
    const textFieldRef = useRef();
  return (
    <div>
      <h3>Success</h3>
      <h3></h3>
        <TextField
          id="myTextField"
          label="TextField"
          variant="outlined"
          inputRef={textFieldRef}
        />
        <button
          onClick={() => {
            setClicked(true);
          }}
        >
          {" "}
          Enter{" "}
        </button>
      </div>

  )
}
