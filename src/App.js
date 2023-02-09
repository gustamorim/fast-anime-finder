import Top from './components/Top';
import Sidebar from './components/Sidebar';
import "./style.css";
import Search from './components/Search';
import RightSidebar from './components/RightSideBar';

function App() {

  return (
    <div className="App">
      <Top />
      <div className="content-wrap">
      <Sidebar />
      <Search />
      <RightSidebar />
      </div>
    </div>
  );
}

export default App;
