import { QueryClient, QueryClientProvider } from 'react-query';
import Example from './components/ReactQueryExample/Example';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      {/* <Profile /> */}
      {/* <Cache /> */}
      <QueryClientProvider client={queryClient}>
        <Example />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
