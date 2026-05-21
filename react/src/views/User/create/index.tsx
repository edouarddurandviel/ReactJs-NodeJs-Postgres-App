import { connect } from "react-redux";
import * as selectors from "../../../stores/rootSelectors";
import * as actions from "../../../stores/rootActions";
import type { AppDispatch, RootState } from "../../../stores";
import { LoadingButton } from "../../../components";
import { BthForm, Form, H2, Message, PLaceHolder } from "../../../components/Layout/styles";
import { Formik, type FormikProps } from "formik";
import { Input } from "../../../components/Formik";
import { schemaUserCreate } from "../../../schemas/userSchema";
import { useRef, useState } from "react";

const Index = ({ dispatch, addUserLoading }: UserProps) => {
  const [data, setData] = useState<boolean>(false);
  const formRef = useRef<FormikProps<any>>(null);
  const ref = formRef.current as any;

  const handleSubmitCreateUser = (values: any) => {
    dispatch(
      actions.user.addOneUser({
        data: values,
      }),
    );
    ref.resetForm();
    setData(true);
  };

  return (
    <PLaceHolder>
      <H2>Create new user</H2>
      <Message>
        Built with <strong>Formik</strong> forms library.
      </Message>
      <Formik
        innerRef={formRef}
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
                  setData(false);
                }}
              />
            </BthForm>
          </Form>
        )}
      </Formik>

      {data && (
        <p>
          <strong>Submited</strong> You can now connect with your own <strong>email</strong> and{" "}
          <strong>password</strong>
        </p>
      )}
    </PLaceHolder>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    addUserLoading: selectors.user.addUserLoadingSelector(state),
  };
};

interface UserProps {
  addUserLoading: boolean;
  dispatch: AppDispatch;
}

export default connect(mapStateToProps)(Index);
