import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFinance } from "../action/finances_actions";

const Finances = () => {
  const finances = useSelector((state) => state.finances);
  const dispatch = useDispatch();
  return (
    <div>
      <table className="table mt-3">
        <thead className="table-dark">
          <tr>
            <th>Patient Name</th>
            <th>Registration Fee</th>
            <th>Doctor Fee</th>
            <th>Medicines Amount</th>
            <th>Total Fee</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {finances.map((finance) => (
            <tr key={finance.id}>
              <td>{finance.patientName}</td>
              <td>{finance.registrationFee}</td>
              <td>{finance.doctorFee}</td>
              <td>{finance.medicinesAmount}</td>
              <td>{finance.totalFee}</td>
              <td>
                <button className="btn btn-secondary mr-2">Update</button>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(finance.financeId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Finances;
