import { useContext, useEffect } from "react";
import {
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import { AuthContext } from "./context/authContext";
import MarvelCalendar from "./pages/Calendar";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./protectedRoutes";

export default function Routes() {
  const { persistUser ,userData } = useContext(AuthContext);


  useEffect(() => {
    persistUser()
  }, [])


  return (
    <BrowserRouter forceRefresh={true}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/calendar">
          <ProtectedRoute userData={userData}>
            <MarvelCalendar/>
          </ProtectedRoute>
        </Route>

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
