import { Outlet } from "react-router";
import { Footer, Header, Main, PLaceHolder } from "./styles";
import type { AppDispatch } from "../../stores";
import * as actions from "../../stores/rootActions";
import { connect } from "react-redux";
import { useCallback } from "react";
import LoadingButton from "../LoadingButton";
import type { UserConnected } from "../../stores/auth/interfaces";
import { UserContext } from "../../contexts/UserContext";
import Menu from "../Menu";
import { footerText } from "../../theme/variables";

const Index = ({ dispatch, user }: LayoutProps) => {
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

  return (
    <UserContext value={user}>
      <PLaceHolder>
        <Header>
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

interface LayoutProps {
  dispatch: AppDispatch;
  user: UserConnected | null;
}

export default connect()(Index);
