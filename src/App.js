import { useEffect, useState } from 'react';
import './App.css';
import M from 'materialize-css';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  useEffect(() => {
    M.AutoInit()
  }, [])
  
  const [cities,setCities]= useState(['Madrid','Rome','Sydney','London','Athens','Paris','New York'])
  const [title,setTitle] = useState('Most popular cities')

  return (
    <div className='App'>
      
      <Header/>
      <SearchBar setTitle={setTitle} setCities={setCities} /> 
      <CardsContainer  title={title} cities={cities} /> 
      <Footer/>
      
    </div>
  );
}

export default App;
