import { Provider } from 'react-redux';
import appStore from './store/appStore';
import { RouterProvider } from 'react-router';
import router from './routes/Router'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <Provider store={appStore}>
       <RouterProvider router={router} />
       <ToastContainer />
    </Provider>
  );
}

export default App;
