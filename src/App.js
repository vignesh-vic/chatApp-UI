import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import { Provider } from 'react-redux'
import { store } from './store/Store';
import ChatApp from './components/ChatApp';
import PrivateRoute from './protectRoute/Private.route';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chatapp" element={
            // <PrivateRoute> 
            <ChatApp />
            // </PrivateRoute>
          } />
        </Routes>
      </Provider >

    </BrowserRouter>
  );
}

export default App;
