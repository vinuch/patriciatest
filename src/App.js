import { Header, MainArea, RecentActivity, Sidebar } from './components';

function App() {
  return (
    <div className="flex">
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
