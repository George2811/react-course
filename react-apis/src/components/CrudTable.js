import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data, setDataToEdit, deleteData}) => {
    return (
        <div>
            <h3>Data Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ?
                    <tr><td colSpan="3">No Data</td></tr>
                    :
                    data.map(el => <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData} />)}
                </tbody>
            </table>
        </div>
    );
}

export default CrudTable