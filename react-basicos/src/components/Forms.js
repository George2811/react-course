import React, { useState } from 'react';

// "Simple" form
/*export default function Forms(){
    const [name, setName] = useState("");
    const [flavor, setFlavor] = useState("");
    const [language, setLanguage] = useState("");
    const [terms, setTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted form");
    }

    return(
        <>
            <h3>Forms component</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                 type="text"
                 id="name"
                 name="name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 />
                 <p>Choose your favorite JS flavor:</p>
                 <input type="radio" id="vanilla" name="flavor" value="vanilla" onChange={(e) => setFlavor(e.target.value)} defaultChecked/>
                 <label htmlFor="vanilla">vanilla</label>
                 <input type="radio" id="react" name="flavor" value="react" onChange={(e) => setFlavor(e.target.value)}/>
                 <label htmlFor="react">react</label>
                 <input type="radio" id="angular" name="flavor" value="angular" onChange={(e) => setFlavor(e.target.value)}/>
                 <label htmlFor="angular">angular</label>
                 <input type="radio" id="vue" name="flavor" value="vue" onChange={(e) => setFlavor(e.target.value)}/>
                 <label htmlFor="vue">vue</label>
                 <input type="radio" id="svelte" name="flavor" value="svelte" onChange={(e) => setFlavor(e.target.value)}/>
                 <label htmlFor="svelte">svelte</label>

                 <p>Choose your favorite programming language</p>
                 <select name="language" onChange={(e)=> setLanguage(e.target.value)}>
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>                    
                 </select>
                 <br />
                <label htmlFor="terms">Acept terms & conditions</label>
                <input type="checkbox" id="terms" name="terms" onChange={(e) => setTerms(e.target.checked)}/>
                <br />
                <input type="submit" />
            </form>
        </>
    );
}*/

// Advanced form
export default function Forms(){
    const [form, setForm] = useState({});

    const handleChange = e => {
        setForm({
            ...form, // form is an object, the spread operator is like form = form + x
            [e.target.name] : e.target.value, // the name of the input in the form, with the value assigned
        });
    }

    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.checked,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted form");
    }

    return(
        <>
            <h3>Forms component</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                 type="text"
                 id="name"
                 name="name"
                 value={form.name}
                 onChange={handleChange}
                 />
                 <p>Choose your favorite JS flavor:</p>
                 <input type="radio" id="vanilla" name="flavor" value="vanilla" onChange={handleChange} defaultChecked/>
                 <label htmlFor="vanilla">vanilla</label>
                 <input type="radio" id="react" name="flavor" value="react" onChange={handleChange}/>
                 <label htmlFor="react">react</label>
                 <input type="radio" id="angular" name="flavor" value="angular" onChange={handleChange}/>
                 <label htmlFor="angular">angular</label>
                 <input type="radio" id="vue" name="flavor" value="vue" onChange={handleChange}/>
                 <label htmlFor="vue">vue</label>
                 <input type="radio" id="svelte" name="flavor" value="svelte" onChange={handleChange}/>
                 <label htmlFor="svelte">svelte</label>

                 <p>Choose your favorite programming language</p>
                 <select name="language" onChange={handleChange}>
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>                    
                 </select>
                 <br />
                <label htmlFor="terms">Acept terms & conditions</label>
                <input type="checkbox" id="terms" name="terms" onChange={handleChecked}/>
                <br />
                <input type="submit" />
            </form>
        </>
    );
}