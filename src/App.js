import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Auto from './components/pages/Auto';
import User from './components/pages/User';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Sidebar/>
          <Main>
            <Topbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/auto" element={<Auto/>}/>
              <Route path="/myinfo" element={<User/>}/>
            </Routes>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 0 auto;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`

export default App;
