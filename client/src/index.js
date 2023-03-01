import ReactDOM from 'react-dom/client';
import './index.css'
import { Provider } from 'react-redux';
import store from './reducers/store';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <Router />
        </Provider>
    </>
);