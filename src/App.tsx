import React from 'react';
import './static/css/App.css';
import { Header } from './components/AppHeader/Header';
import { PageLayout } from './components/Pages/PageLayout';
import { Character } from './static/types';

function App2() {

  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [page, setPage] = React.useState<number>(0);

  const changePage = (newPage: number) => {
    setPage(newPage);
    // Think about validations...
  }

  return (
      <div className="root">
        <Header changePage={changePage}/>
        {/*<PageLayout page={page} characters={characters} setCharacters={setCharacters} />*/}
      </div>
  );
}

function App(){
    const [page, setPage] = React.useState<number>(0);
    const changePage = (newPage: number) => {
        setPage(newPage);
        //todo: Think about validations...
    }

    return (
        <div className="root">
            <Header changePage={changePage}/>
            {PageLayout}
        </div>
    );
}

export default App;
