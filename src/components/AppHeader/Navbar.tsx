import React from 'react';
import { pages } from '../../static/app-constants';
import '../../static/css/App.css';

export interface NavbarProps{
    changePage(newPage: number): void;
}


export const Navbar: React.FC<NavbarProps> = ({
                                                changePage
}) => {
    const handlePageChange = (page: string) => {
        switch (page) {
            case 'Home':
                changePage(0);
                break;
            case 'Create New Poll':
                changePage(1);
                break;
            case 'My Polls':
                changePage(2);
                break;
            case 'FAQ':
                changePage(3);
                break;
            default:
                break;
        }
    }

    return (
        <div className='nav-tab'>
             {pages.map(page =>
                <button key={page} className='nav-button' onClick={() => handlePageChange(page)}>
                    {page}
                </button>)}
        </div>
    )
}
