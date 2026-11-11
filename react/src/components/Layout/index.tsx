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
import { errorReset } from "../../stores/error/actions";
import Alerts from "../Alerts";

const Index = ({ dispatch, user, error }: LayoutProps) => {
  const handleLogout = useCallback(() => {
    if (user) {
      dispatch(
        actions.auth.userLogout({
          params: {
            userId: user.loggedUser.id,
          },
        }),
      );
      return () => {
        dispatch(actions.auth.reset(["user"]));
      };
    }
  }, [user]);

  useEffect(() => {
    error && console.dir(error)
  }, [error])

 

  return (
    <UserContext value={user}>
      <PLaceHolder>
        <Header>
            {/* store alerts depends on dispatch(messageError(error from server)) */}
            <Alerts 
              error={{err: true, message: "Not found"}} 
              closeModal={() => {
                dispatch(errorReset(["error"]));
              }}
            />

            {/* <Alert>
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
              >
                Logout
              </CloseAlertButton>
            </Alert> */}
          
          {user && (
            <>
              <Menu />
              <LoadingButton
                content="Logout"
                onClick={() => {
                  handleLogout();
                }}
              />
              <div>{user.loggedUser.email}</div>
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
