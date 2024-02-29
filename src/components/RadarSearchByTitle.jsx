import React, {useState} from 'react';
import Fuse from 'fuse.js';

const options = {
    keys: ['title', 'description'],
    includeMatches: true,
    minMatchCharLength: 1,
    threshold: 0.2,
};


function RadarSearchByTitle({datos}) {
    const fuse = new Fuse(datos, options);
    const [technologies, setTechnologies] = useState([]);
    const [query, setQuery] = useState('');

    function handleOnSearch({target = {}}) {
        console.log(target)
        const {value} = target;
        setQuery(value);
        const filteredData = value.trim() ? fuse
            .search(value)
            .map(result => result.item)
            .slice(0, 10) : datos; // Si no hay consulta, vuelve a los posts iniciales

        setTechnologies(filteredData); // Actualiza el estado de posts con los filtrados o los iniciales
    }


    return (
        <div>
            <label htmlFor="searchRadar" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search Radar
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-search"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx={10} cy={10} r={7}></circle>
                        <line x1={21} y1={21} x2={15} y2={15}></line>
                    </svg>
                </div>
                <input
                    type="text"
                    id="searchRadar"
                    value={query}
                    onChange={handleOnSearch}
                    className="block w-full p-4 pl-10 text-sm 
                                text-gray-900 
                               border border-gray-300
                               rounded-lg bg-gray-50
                               focus:outline-none
                               focus:ring-blue-500
                               focus:border-blue-500"
                    placeholder="Look for a technology by name or description..."
                />
            </div>

            {technologies.length > 0 && (
                <div className="max-w-4xl mx-auto divide-y divide-gray-200 border-b-8 border-b-theme-3">
                    {technologies.map((item) => (
                        <div className="py-4">
                            <h2 className="text-2xl font-semibold text-theme-3">{item.title}</h2>
                            <p className="mt-2 text-base text-theme-4 dark:text-theme-1">{item.description}</p>
                            <p className="mt-1 text-sm text-theme-4 dark:text-theme-1">Tags: <span
                                className="text-gray-600 dark:text-theme-2">{item.tags.join(', ')}</span></p>
                            <a href={item.url}
                               className="mt-1 text-sm text-blue-500 dark:text-theme-0 underline-offset-2 underline hover:text-theme-2"
                               target="_blank" rel="noopener noreferrer">Learn more</a>
                            <p className="mt-1 text-sm text-theme-4 dark:text-theme-0">Published on: <span
                                className="text-gray-600 dark:text-theme-2">{item.date}</span></p>
                        </div>
                    ))}
                </div>)}

        </div>
    );
}

export default RadarSearchByTitle;