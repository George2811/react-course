import React, { useState } from 'react';

const initialForm = {
    artist: "",
    song: ""
}

const SongForm = ({handleSearch}) => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.artist || !form.song) {
            alert("Incomplete data");
            return;
        }

        handleSearch(form);
        setForm(initialForm);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="artist" placeholder='Artist' onChange={handleChange} value={form.artist} />
                <input type="text" name="song" placeholder='Song' onChange={handleChange} value={form.song} />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}
export default SongForm