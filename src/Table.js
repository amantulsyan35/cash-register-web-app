import React from 'react';

import './Table.css';

const Table = ({ noOfNotes, denom }) => {
  return (
    <div className='Table'>
      <table>
        <tbody>
          <tr>
            <th>No.of Notes</th>
            <td className ='note'>{denom === 2000 ? noOfNotes : ''}</td>
            <td className ='note'>{denom === 500 ? noOfNotes : ''}</td>
            <td className ='note'>{denom === 100 ? noOfNotes : ''}</td>
            <td className ='note'>{denom === 20 ? noOfNotes : ''}</td>
            <td className ='note'>{denom === 10 ? noOfNotes : ''}</td>
            <td className ='note'>{denom === 5 ? noOfNotes : ''}</td>
            <td className ='note'>{denom === 1 ? noOfNotes : ''}</td>
          </tr>
          <tr>
            <th>Note</th>
            <td>2000</td>
            <td>500</td>
            <td>100</td>
            <td>20</td>
            <td>10</td>
            <td>5</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
