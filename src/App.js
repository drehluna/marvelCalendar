import Routes from "./routes";
import AuthContextProvider from "./context/authContext";
function App() {
  return (
    <AuthContextProvider>
      <Routes/>
    </AuthContextProvider>
  );
}

export default App;
