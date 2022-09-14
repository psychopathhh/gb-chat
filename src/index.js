import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatPage, GistsPage, HomePage, LoginPage, ProfilePage, SignUpPage } from './components/pages';
import './global.css'
import { MainHeader, PublicRoute, PrivateRoute } from './components';
import { CustomThemeProvider } from './theme-context';
import { Provider } from 'react-redux';
import { store, persistor } from './store'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './api/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [session, setSession] = useState(null)
  const isAuth = session?.email
  useEffect(() => {
    onAuthStateChanged(auth, (user => {
      if (user) {
        setSession(user)
      } else {
        setSession(null)
      }
    }))
  }, [])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CustomThemeProvider>
          <BrowserRouter>
            <MainHeader email={isAuth} />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route exact path='/chat/*' element={
                <PrivateRoute isAuth={isAuth}>
                  <ChatPage />
                </PrivateRoute>
              } />
              <Route path='/profile' element={
                <PrivateRoute isAuth={isAuth}>
                  <ProfilePage />
                </PrivateRoute>
              } />
              <Route path='/gists' element={
                <PrivateRoute isAuth={isAuth}>
                  <GistsPage />
                </PrivateRoute>
              } />
              <Route path='/login' element={
                <PublicRoute isAuth={isAuth}>
                  <LoginPage />
                </PublicRoute>
              } />
              <Route path='/signup' element={
                <PublicRoute isAuth={isAuth}>
                  <SignUpPage />
                </PublicRoute>} />
              <Route path='*' element={<h1>404</h1>} />
            </Routes>
          </BrowserRouter>
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  )
}

root.render(
  <App />
);




