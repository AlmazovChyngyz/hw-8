import './App.css';
import PokemonsPage from './page/PokemonsPage/PokemonsPage';
import { BrowserRouter, Route, Router, Routes, useParams } from 'react-router-dom';
import FormPage from './page/FormPage/FormPage';
import PokemonInfoPage from './page/pokemonInfoPage/PokemonInfoPage';
import Menu from './components/menu/Menu';


function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                {/*<Route path={'/'} element={<FormPage/>}/>*/}
                <Route path={'/pokemon'} element={<PokemonsPage/>}/>
                <Route path={'/pokemon/:id'} element={<PokemonInfoPage/>}/>
            </Routes>
            <Menu/>

        </BrowserRouter>
    );
}


export default App;