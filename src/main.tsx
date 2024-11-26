
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './redux/Store.ts';
import QueryClientProviderWrapper from './QueryClientProvider';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <QueryClientProviderWrapper>
            <App />
        </QueryClientProviderWrapper>
    </Provider>
)
