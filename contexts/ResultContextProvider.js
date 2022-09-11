import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': 'b64fd092a2msh8dae61f8e8e00f2p1436cbjsnaa5402b48aff',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        });

        const data = await response.json();
        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContextProvider value={{ getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContextProvider>
    )
}

export const useResultContext = () => useContext(ResultContext)
