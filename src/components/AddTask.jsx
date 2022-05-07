import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addAction } from "../redux/tasksSlice";

export default function AddTask() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('')

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if(value.trim().length === 0)
    {
      setMessage('Empty input is forbidden')
      setValue('');
      return;
    }

    dispatch(
      addAction({
        task: value
      })
    );

    setValue('');
    setMessage('')
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="row">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Add task"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          ></input>

          {message && <div className="message">{message}</div>}
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">
            Add task
          </button>
        </div>
      </div>

    </form>
  );
}
