import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

// removed StrictMode because it throws error for MaterialUI dropdown
// and it isnt fixed for now 
ReactDOM.render(
    <QueryClientProvider client={client}>
        <App />
    </QueryClientProvider>,
    document.getElementById('root')
);