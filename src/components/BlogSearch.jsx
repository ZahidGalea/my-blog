import Fuse from 'fuse.js';
import React, {useState} from 'react';
import StringDate from './StringDate';

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
    keys: ['frontmatter.title', 'frontmatter.description', 'frontmatter.slug'],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
};

function BlogSearch({searchList = []}) {
    if (!searchList) {
        return <div>Cargando...</div>; // Mostrar un mensaje de carga o nada mientras `datos` está undefined.
    }
    const initialPosts = searchList.slice(0, 10);
    const [query, setQuery] = useState('');
    const fuse = new Fuse(initialPosts, options);
    const [posts, setPosts] = useState(initialPosts); // Asumiendo que quieres mostrar estos al inicio

    function handleOnSearch({target = {}}) {
        const {value} = target;
        setQuery(value);
        const filteredPosts = value.trim() ? fuse
            .search(value)
            .map(result => result.item)
            .slice(0, 10) : initialPosts; // Si no hay consulta, vuelve a los posts iniciales

        setPosts(filteredPosts); // Actualiza el estado de posts con los filtrados o los iniciales
    }

    return (
        <div>
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
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
                    id="search"
                    value={query}
                    onChange={handleOnSearch}
                    className="block w-full p-4 pl-10 text-sm 
                                text-gray-900 
                               border border-gray-300
                               rounded-lg bg-gray-50

                               focus:outline-none
                               focus:ring-blue-500
                               focus:border-blue-500"
                    placeholder="Look for a blog..."
                />
            </div>
            {query.length > 1 && (
                <div className="my-4">
                    Found {posts.length} {posts.length === 1 ? 'result' : 'results'} for '{query}'
                </div>
            )}

            <br/>
            <ul className="list-none">
                {posts &&
                    posts.map((post) => (
                        <li className="py-2">
                            <a
                                className="text-lg text-theme-4 dark:text-theme-2 hover:underline underline-offset-2"
                                href={`/${post.frontmatter.slug}`}
                            >
                                {post.frontmatter.title}
                            </a>
                            <p className="text-sm text-gray-800 dark:text-theme-3">{post.frontmatter.description} -<StringDate
                                date={post.frontmatter.pubDate}/></p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default BlogSearch;