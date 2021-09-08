import { Header, MainArea, RecentActivity, Sidebar } from './components';

function App() {
  return (
    <div className="flex h-screen py-4">
      <Sidebar />
      <div>
        <Header />
        <div className="flex">
          <MainArea />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

export default App;
