import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Pages/Welcome/Welcome';
import Chatpage from './Pages/chatpage/chatpage';
import Dashboard from './Pages/dashboard/dashboard';
import Login from './Pages/login/login';
import SignUp from './Pages/signup/signup';
import AuthRoute from './routes/authRoute';
import ProtectedRoute from './routes/protectedRoute';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <SignUp />
              </AuthRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/chats" element={<Chatpage />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
