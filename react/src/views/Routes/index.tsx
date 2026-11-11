import { Route, Routes } from "react-router";
import RouteSettings from "../../routes/index";
import Layout from "../../components/Layout";
import PrivateRoutes from "./PrivateRoutes";
import { connect } from "react-redux";
import * as selectors from "../../stores/rootSelectors";
import * as actions from "../../stores/rootActions";
import type { AppDispatch, RootState } from "../../stores";
import type { UserConnected } from "../../stores/auth/interfaces";
import { useEffect, useState } from "react";

const Index = ({ user, session, dispatch }: RootProps) => {
  const [isSession, setIsSession] = useState(false);

  useEffect(() => {
    if(isSession === false && session === null){
      dispatch(actions.auth.userSession());
      if(isSession === false){
          setIsSession(true)
      }
    }
  }, [session, dispatch])


  return (
    <Routes>
      <Route
        key="default"
        path={"/"}
        element={
          <PrivateRoutes user={user} session={isSession}>
              <Layout user={user} />
          </PrivateRoutes>
        }
      >
        {RouteSettings.length &&
          RouteSettings.map((route) => {
            if (Array.isArray(route)) {
              RouteSettings.map((children) => {
                return (
                  <Route
                    key={children.name}
                    path={children.path}
                    index={children.index}
                    Component={children.component}
                  />
                );
              });
            } else {
              return (
                <Route
                  key={route.name}
                  path={route.path}
                  index={route.index}
                  Component={route.component}
                />
              );
            }
          })}
      </Route>
    </Routes>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    user: selectors.auth.authSelector(state),
    session: selectors.auth.sessionSelector(state),
    userLoading: selectors.auth.authLoadingSelector(state),
  };
};

interface RootProps {
  user: UserConnected | null;
  session: boolean | null;
  userLoading: boolean;
  dispatch: AppDispatch;
}

// export default App
export default connect(mapStateToProps)(Index);
