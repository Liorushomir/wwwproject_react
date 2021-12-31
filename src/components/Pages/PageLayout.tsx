import React from 'react';
import '../../static/css/App.css';
import { Home } from './HomePage/Home';
import { CreatePoll } from './CreatePollPage/CreatePoll';
import { DisplayPolls } from './DisplayPollsPage/DisplayPolls';
import { FAQ } from './FAQPage/FAQ';

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