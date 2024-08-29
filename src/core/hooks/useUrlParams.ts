


import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

type Params = Record<string, string>;

export const useUrlParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    // Function to get all params as an object
    const getParams = (): Params => {
        const params: Params = {};
        searchParams.forEach((value, key) => {
            params[key] = value;
        });
        return params;
    };

    // Function to set multiple params from an object
    const setParams = (params: Params): void => {
        const newSearchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            newSearchParams.set(key, value);
        });
        setSearchParams(newSearchParams);
    };

    return {
        getParams,
        setParams
    };
}