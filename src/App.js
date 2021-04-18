import './App.css';
import Slidebar from './components/Slidebar'
import Table from './components/Table'
import AboutMe from './components/Aboutme'
import React from 'react'

function App() {
  const [valueTable, setValueTable] = React.useState(false);
  const [valueAboutMe, setAboutMe] = React.useState(false);

  function handleChange(newValue) {
    console.log(newValue);
    if(newValue === "1"){

      setValueTable(true);
      setAboutMe(false);

    }
    if(newValue === "2"){
      setAboutMe(true);
      setValueTable(false);
    }


  }
  return (
    <div className="App">
      <Slidebar value={valueTable} onChange={handleChange} />
      {valueTable && <Table/>}
      {valueAboutMe && <AboutMe/>}
    </div>
  );
}

export default App;
