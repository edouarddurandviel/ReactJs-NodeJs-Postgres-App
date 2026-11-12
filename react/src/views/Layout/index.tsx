import { Outlet } from "react-router";
import { Footer, Header, Main, PLaceHolder } from "../../theme/styles";
import type { AppDispatch, RootState } from "../../stores";
import * as actions from "../../stores/rootActions";
import { connect } from "react-redux";
import { useCallback } from "react";
import type { UserConnected } from "../../stores/auth/interfaces";
import { UserContext } from "../../contexts/UserContext";
import { footerText } from "../../theme/variables";
import * as selectors from "../../stores/rootSelectors";
import { errorReset } from "../../stores/error/actions";
import { AlertsCard, AlertsSessionCard, LoadingButton } from "../../components";
import Menu from "../../components/Menu";

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

  return (
    <UserContext value={user}>
      <PLaceHolder>
        <Header>
            <AlertsCard 
              data={error} 
              closeModal={() => {
                dispatch(errorReset(["error"]));
              }}
            />

            <AlertsSessionCard 
              error={error && error.status && error.status === 401} 
              handleLogout={() => {
                dispatch(errorReset(["error"]));
                handleLogout();
              }}
            />
          
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
