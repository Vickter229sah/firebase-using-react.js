import './App.css';
import AuthDetails from './component/AuthDetail';
import SignUp from './component/auth/SignUp';
import SignIn from './component/auth/Signin';

function App() {
  return (
    <div className="App">
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
    </div>
  );
}

export default App;
