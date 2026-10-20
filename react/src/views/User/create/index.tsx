import { connect } from "react-redux";
import * as selectors from "../../../stores/rootSelectors";
import * as actions from "../../../stores/rootActions";
import type { AppDispatch, RootState } from "../../../stores";
import { Button, LoadingButton } from "../../../components";
import {
  BthForm,
  Container,
  Form,
  H2,
  LeftColumn,
  Message,
  RightColumn,
} from "../../../components/Layout/styles";
import { Formik, type FormikProps } from "formik";
import { Input } from "../../../components/Formik";
import { schemaUserCreate } from "../../../schemas/userSchema";
import { useEffect, useRef, useState } from "react";
import type { User } from "../../../stores/user/interfaces";
import { formatFrDate } from "../../../utils";
import { UserDate, UserList } from "./styles";

const Index = ({ dispatch, addUserLoading, users }: UserProps) => {
  const [userList, setUserList] = useState<boolean>(false);
  const [userRights, setUserRights] = useState<any>();
  const userRef = useRef<FormikProps<any>>(null);
  const rightsRef = useRef<FormikProps<any>>(null);
  const userForm = userRef.current as any;
  //const rightsForm = rightsRef.current as any;

  useEffect(() => {
    dispatch(actions.user.getAllUsers());

    dispatch(actions.socket.user.subscribeAllUsers());

    return () => {
      dispatch(actions.socket.user.unsubscribeAllUsers());
    };
  }, [dispatch]);

  const handleSubmitCreateUser = (values: any) => {
    dispatch(
      actions.user.addOneUser({
        data: values,
      }),
    );
    userForm.resetForm();
    setUserList(true);
  };

  const handleRights = (args: any) => {
    if (args) setUserRights(args);
  };

  const handleUserRights = (args: any) => {
    if(args) console.log(args)
  }

  return (
    <Container>
      <LeftColumn>
        <H2>Create new user</H2>
        <Message>
          Built with <strong>Formik</strong> forms library.
        </Message>
        {users &&
          users.length > 0 &&
          users.map((user) => {
            return (
              <UserList
                key={user._id}
                onClick={() => {
                  handleRights(user.user_rights.content.routes ?? null);
                }}
              >
                {user.email} -{" "}
                <UserDate>
                  {formatFrDate(user.createdAt!).date}
                  {user.user_rights && user.user_rights.content.routes.length > 0 && (
                    <Button
                      content="select"
                      onClick={() => {
                        console.log(user.user_rights);
                        handleRights(user.user_rights ?? null);
                      }}
                    />
                  )}
                </UserDate>
              </UserList>
            );
          })}
        <Formik
          innerRef={userRef}
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={schemaUserCreate}
          onSubmit={handleSubmitCreateUser}
        >
          {({ values, resetForm, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                name="email"
                type="text"
                id="1"
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Input
                name="password"
                id="2"
                label="Password"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <BthForm>
                <LoadingButton type="submit" content={addUserLoading ? "Submitting" : "Submit"} />
              </BthForm>
              <BthForm>
                <LoadingButton
                  type="button"
                  content={"Reset"}
                  onClick={() => {
                    resetForm();
                    setUserList(false);
                  }}
                />
              </BthForm>
            </Form>
          )}
        </Formik>

        {userList && (
          <p>
            <strong>Submited</strong> You can now connect with your own <strong>email</strong> and{" "}
            <strong>password</strong>
          </p>
        )}
      </LeftColumn>
      <RightColumn>
        <Formik
          innerRef={rightsRef}
          initialValues={{
            toggle: false,
            checked: [],
          }}
          
          onSubmit={handleUserRights}
        >
          {({ resetForm, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <BthForm>
                {userRights &&
                  userRights.map((route: any) => (
                    <Input
                      name="checked"
                      id={route.id}
                      label={route.name}
                      type="checkbox"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={JSON.stringify(route)}
                    />
                ))}
              <BthForm>
                <LoadingButton type="submit" content={"Submit"} />
              </BthForm>
                <LoadingButton
                  type="button"
                  content="Reset"
                  onClick={() => {
                    resetForm();
                  }}
                />
              </BthForm>
            </Form>
          )}
        </Formik>
        {userRights &&
          userRights.map((route: any) => (
            <div key={route.id}>
              {route.name} : {route.rights.edit && "edit"} {route.rights.read && "read"}
            </div>
          ))}
      </RightColumn>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    addUserLoading: selectors.user.addUserLoadingSelector(state),
    users: selectors.user.usersSelector(state),
  };
};

interface UserProps {
  users: User[];
  addUserLoading: boolean;
  dispatch: AppDispatch;
}

export default connect(mapStateToProps)(Index);
