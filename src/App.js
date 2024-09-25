import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import { Provider, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { store } from './store/Store';
import ChatApp from './components/ChatApp';
import { useEffect, useState } from 'react';
import PrivateRoute from './components/auth';

function App() {
  // const [token, setToken] = useState('')
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   console.log(token, 'kj');

  //   setToken(token)
  // }, [token])
  // console.log(token, 'jj');

  return (
    <BrowserRouter>
      <Provider store={store}>

        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/chatapp"
            element={
              <PrivateRoute>
                <ChatApp />
              </PrivateRoute>

            }
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  );

}

export default App;
