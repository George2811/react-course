import React, { useState } from 'react';

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
        id: 1,
        name: "Cr7",
        team:"Manchester United"
    },
    {
        id: 2,
        name: "Messi",
        team:"Psg"
    },
    {
        id: 3,
        name: "Mbappe",
        team:"Psg"
    },
    {
        id: 4,
        name: "Vinicius Jr",
        team:"Real Madrid"
    },
    {
        id: 5,
        name: "Salah",
        team:"Liverpool"
    },
]

const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        //console.log(data);
        setDb([...db, data]);
    }
    const updateData = (data) => {
        let  newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
    }
    const deleteData = (id) => {
        let isDelete = window.confirm(`Are you sure to delete the player with id: ${id}`);
        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
        } else{
            return;
        }
    }

    return(
        <div>
            <h2>Crud app</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
                <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
            </article>            
        </div>
    );
}

export default CrudApp