
import { useEffect, useState } from 'react';

const useCustomHook = (url) => {//pasamos parametros cual props
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const dataJson = await response.json();
                setData(dataJson);
            } catch (error) {
                console.log( error);
            }
        };

        fetchData();//EJECUTAR PARA QUE NO SE QUEDE CARGANDO

        return () => {
            setData(null);
        };
    }, [url]);

    return data;
};

export default useCustomHook;

