
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';

interface Props_I {
    value?: string;
    isLoading: boolean;
    onSubmit: (event: string) => void;
}

export const SearchBar: FC<Props_I> = ({
    value = '',
    isLoading = false,
    onSubmit
}) => {

    const [isMounted, setisMounted] = useState(false)

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(searchTerm);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {

        if (isMounted === false) return;
        setSearchTerm(value);

    }, [isMounted])

    useEffect(() => {
        setisMounted(true);
    }, []);

    return (
        <form className="relative" onSubmit={handleSubmit}>
            <label htmlFor="app-search" className="sr-only">Search</label>
            <input
                id="app-search"
                className="w-full py-3 bg-white form-input pl-9 dark:bg-gray-800"
                type="search"
                value={searchTerm}
                onChange={handleChange}
            />
            <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                <svg className="ml-3 mr-2 text-gray-400 fill-current shrink-0 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
            </button>
        </form>
    );
};
