import { Header, MainArea, RecentActivity, Sidebar } from './components';

function App() {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <Sidebar />
      <div className="w-10/12 h-full">
        <Header />
        <div className="flex h-full">
          <MainArea />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

export default App;
