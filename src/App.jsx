import Navbar from "./components/Navbar";
import SideChat from "./components/SideChat";
import MainChat from "./components/MainChat";
import { DataContextProvider } from "./context/dataContext";
function App() {
  return (
    <DataContextProvider>
      <div className="h-screen w-full truncate">
        <Navbar />
        <div className="flex">
          <SideChat />
          <MainChat />
        </div>
      </div>
    </DataContextProvider>
  );
}

export default App;
