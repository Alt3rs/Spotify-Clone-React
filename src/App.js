import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
