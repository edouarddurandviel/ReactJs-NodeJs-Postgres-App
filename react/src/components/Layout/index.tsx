import { Outlet } from "react-router";
import { Alert, CloseAlert, CloseAlertButton, Footer, Header, Main, PLaceHolder } from "./styles";
import type { AppDispatch, RootState } from "../../stores";
import * as actions from "../../stores/rootActions";
import { connect } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import LoadingButton from "../LoadingButton";
import type { UserConnected } from "../../stores/auth/interfaces";
import { UserContext } from "../../contexts/UserContext";
import Menu from "../Menu";
import { footerText } from "../../theme/variables";
import * as selectors from "../../stores/rootSelectors";
import { errorMessage, errorReset } from "../../stores/error/actions";

const Index = ({ dispatch, user, error }: LayoutProps) => {
  const [alert, setAlert] = useState<boolean>(false);
  const handleLogout = useCallback(() => {
    if (user) {
      dispatch(
        actions.auth.userLogout({
          params: {
            userId: user.userPermissions.id,
          },
        }),
      );
      return () => {
        dispatch(actions.auth.reset(["user"]));
      };
    }
  }, [user]);

  useEffect(() => {
    if (error && error.length) {
      setAlert(true);
    }
  }, [error]);

  return (
    <UserContext value={user}>
      <PLaceHolder>
        <Header>
          {(error && error.length>0) && alert && (
            <Alert>
              {error}
              <CloseAlert
                onClick={() => {
                  dispatch(errorReset(["error"]));
                  setAlert(false);
                }}
              >
                X
              </CloseAlert>
              <CloseAlertButton
                onClick={() => {
                  dispatch(errorReset(["error"]));
                  handleLogout();
                }}
              >Logout</CloseAlertButton>
            </Alert>
          )}
          {user && (
            <>
              <Menu />
              <LoadingButton
                content="Logout"
                onClick={() => {
                  handleLogout();
                }}
              />
              <div>{user.userPermissions.email}</div>
            </>
          )}
        </Header>
        <span style={footerText as React.CSSProperties}>
          Typescript - React - Redux - Immer - Axios - WebSockets - TanStack queries -
          ReactHookForms - Formiz - argon2
        </span>
        <Main>
          <Outlet />
        </Main>
        <Footer>
          <span style={footerText as React.CSSProperties}>
            Typescript - React - Redux - Immer - Axios - WebSockets - TanStack queries -
            ReactHookForms - Formiz - argon2
          </span>
        </Footer>
      </PLaceHolder>
    </UserContext>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    error: selectors.error.errorSelector(state),
  };
};

interface LayoutProps {
  dispatch: AppDispatch;
  user: UserConnected | null;
  error: any;
}

export default connect(mapStateToProps)(Index);
