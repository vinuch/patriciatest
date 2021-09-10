import { Header, MainArea, RecentActivity, Sidebar } from './components';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full md:ml-16p md:w-10/12">
        <Header />
        <div className="flex flex-wrap mt-24">
          <MainArea />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

export default App;
