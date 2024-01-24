import { useState, useEffect } from "react";
import axios from "axios";

const useQuery = (url) =>{

    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
    
        const asyncFunc = async()=>{
            try{
                let responseTemp = await axios.get(url);
                setResponse(responseTemp);
            }catch(error){
                alert('Ah,something went wrong!!');
                setError(error);
            }
        }
        
        setLoading(true);
        asyncFunc()
        setLoading(false);
    },[url, response]);

    return {response, loading, error};

}

export default useQuery;