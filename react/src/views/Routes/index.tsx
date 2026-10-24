import { Route, Routes } from "react-router";
import RouteSettings from "../../routes/index";
import Layout from "../../components/Layout";
import PrivateRoutes from "./PrivateRoutes";
import { connect } from "react-redux";
import * as selectors from "../../stores/rootSelectors";
import type { RootState } from "../../stores";
import type { UserConnected } from "../../stores/auth/interfaces";

const Index = ({ user }: RootProps) => {
  return (
    <Routes>
      <Route
        key="default"
        path={"/"}
        element={
          <PrivateRoutes user={user}>
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
    userLoading: selectors.auth.authLoadingSelector(state),
  };
};

interface RootProps {
  user: UserConnected | null;
  userLoading: boolean;
}

// export default App
export default connect(mapStateToProps)(Index);
