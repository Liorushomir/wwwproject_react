import React from 'react';
import '../../static/css/App.css';
import { DisplayPolls } from './DisplayPollsPage/DisplayPolls';
import {CreatePoll} from './CreatePollPage/CreatePoll';
import { FAQ } from './FAQPage/FAQ';
import { Home } from './HomePage/Home';

export interface PageLayoutProps {
    page: number;
}
export const PageLayout: React.FC<PageLayoutProps> = ({
                                                          page
}) => {

    switch(page) {
        case 0:
            return <Home />
        case 1:
            return <CreatePoll />
        case 2:
            return <DisplayPolls />
        case 3:
            return <FAQ />
        default:
            return null;

    }
}