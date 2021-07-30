import React, { useState, useEffect } from 'react';

import './CashRegister.css';

import Table from './Table';

const CashRegister = () => {
  const [bill, setBill] = useState(0);
  const [cash, setCash] = useState(0);
  const [note, setNote] = useState(0);
  const [denomination, setDenomination] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [hide, setHide] = useState(true);

  const calculate = (evt) => {
    evt.preventDefault();
    setClicked(true);
  };

  const handleShow = () => {
    setHide(false);
  };

  useEffect(() => {
    if (Number(bill) < Number(cash)) {
      // Calculating Denominations
      let remaining = cash - bill;
      if (remaining === 2000) {
        setNote(1);
        setDenomination(2000);
      } else if (remaining === 500) {
        setNote(1);
        setDenomination(500);
      } else if (remaining === 100) {
        setNote(1);
        setDenomination(100);
      } else if (remaining === 20) {
        setNote(1);
        setDenomination(20);
      } else if (remaining === 10) {
        setNote(1);
        setDenomination(10);
      } else if (remaining === 5) {
        setNote(1);
        setDenomination(5);
      } else if (remaining === 1) {
        setNote(1);
        setDenomination(1);
      } else {
        // Counting denominations
        if (remaining % 2000 === 0) {
          setNote(remaining / 2000);
          setDenomination(2000);
        } else if (remaining % 500 === 0) {
          setNote(remaining / 500);
          setDenomination(500);
        } else if (remaining % 100 === 0) {
          setNote(remaining / 100);
          setDenomination(100);
        } else if (remaining % 20 === 0) {
          setNote(remaining / 20);
          setDenomination(20);
        } else if (remaining % 10 === 0) {
          setNote(remaining / 10);
          setDenomination(10);
        } else if (remaining % 5 === 0) {
          setNote(remaining / 5);
          setDenomination(5);
        } else {
          setNote(remaining);
          setDenomination(1);
        }
      }
    }
  }, [bill, cash]);

  //   console.log('rendering');

  return (
    <div className='Cash-register'>
      <h2>Cash Register Manager</h2>
      <p>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </p>
      <form onSubmit={calculate}>
        <div className='Form-input'>
          <label>Bill Amount:</label>
          <input
            type='number'
            id='bill-amaunt'
            onChange={(evt) => setBill(evt.target.value)}
          />
        </div>
        {bill !== 0 && hide === false && (
          <div className='Form-input'>
            <label>Cash Given:</label>
            <input
              type='number'
              id='cash-amaount'
              onChange={(evt) => setCash(evt.target.value)}
            />
          </div>
        )}
        {hide === true && (
          <button className='Check' onClick={handleShow}>
            Next
          </button>
        )}
        {hide === false && (
          <button type='submit' className='Check' onClick={calculate}>
            Check
          </button>
        )}
      </form>
      {Number(bill) === Number(cash) && clicked === true && (
        <p>No amount should be returned</p>
      )}
      {Number(bill) > Number(cash) && clicked === true && (
        <p>Cash is less than bill, please enter right amount</p>
      )}
      {Number(bill) < Number(cash) && clicked === true && (
        <div>
          <h2> Return Change: </h2>
          <Table noOfNotes={note} denom={denomination} />
        </div>
      )}
    </div>
  );
};

export default CashRegister;
