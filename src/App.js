import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { RouterProvider } from 'react-router';
import router from './routes/Router'

function App() {
  return (
    <Provider store={appStore}>
       <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
