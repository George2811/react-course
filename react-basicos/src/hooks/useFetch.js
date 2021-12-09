import { useState, useEffect } from 'react';

// Custom Hook, is very useful when you dont want to repeat code, for exameple to make a petition
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            try {
                let res = await fetch(url);
                if(!res.ok){
                    // eslint-disable-next-line no-throw-literal
                    throw {
                        err:true,
                        status:res.status,
                        statusText:!res.statusText? "An error ocurred" : res.statusText
                    };
                }
                let data = await res.json();
                setIsPending(false);
                setData(data);
                setError({err:false});                
            } catch (err) {
                setIsPending(true);
                setError(err); 
            }            
        }
        getData(url);
    }, [url]);

    return {data, isPending, error}
}