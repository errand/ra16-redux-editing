import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addAction, editAction } from "../redux/tasksSlice";

export default function AddTask() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('')
  const [priceMessage, setPriceMessage] = useState('')
  const [editing, setEditing] = useState(false)

  const dispatch = useDispatch();
  const list = useSelector((state) => state.tasks)
  console.log(list)

  const onSubmit = (event) => {
    event.preventDefault();

    if(title.trim().length === 0)
    {
      setMessage('Empty input is forbidden')
      setTitle('');
      return;
    }

    if(!/[+-]?([0-9]*[.])?[0-9]+/.test(price.trim()))
    {
      setPriceMessage('Price should be digits')
      setPrice('');
      return;
    }

    dispatch(
      addAction({
        title,
        price
      })
    );

    setTitle('');
    setPrice('');
    setMessage('')
    setPriceMessage('')
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="row">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Add task"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
          {message && <div className="message">{message}</div>}
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Add price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          ></input>
          {priceMessage && <div className="message">{priceMessage}</div>}
        </div>
        <div className="col-auto">
          <button className="btn btn-success">
            Add task
          </button>
        </div>
      </div>

    </form>
  );
}
