
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from "./utils/store";
import WatchPage from './Components/WatchPage';
import MainContainer from "./Components/MainContainer";

function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    }
  ]
  }])
  return (
    <Provider store={store}>
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
