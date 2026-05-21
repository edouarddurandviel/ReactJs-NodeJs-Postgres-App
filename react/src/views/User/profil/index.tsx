import { connect, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as selectors from "../../../stores/rootSelectors";
import * as actions from "../../../stores/rootActions";
import type { AppDispatch, RootState } from "../../../stores";
import type { ThunkDispatch } from "redux-thunk";
import { Alerts, LoadingButton, Meta } from "../../../components/index";
import { BthForm, Column, Form, H2, Message } from "../../../components/Layout/styles";
import { Input } from "../../../components/Formik";
import { useCallback, useEffect, useState } from "react";
import { type SubmitHandler } from "react-hook-form";
import { formizUser, schemaUser } from "../../../schemas/userSchema";
import type { AnyAction } from "redux";
import { RHFform } from "../../../components/RHF/Form/styles";
import { ReactHookForm, RHFInputField } from "../../../components/RHF";
import Selector from "./Selector";

const Index = ({ profil, dispatch }: UserProps) => {
  const appDispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
  const [open, setOpen] = useState<boolean>(false);

  const submitProfil = (values: any) => {
    // userId from incoming user list
    appDispatch(
      actions.user.addProfilThunk({
        params: {
          userId: "69943794ffc1d6220bd5e7c1",
        },
        data: values,
      }),
    );
  };

  const closeModal = useCallback(() => {
    dispatch(actions.user.reset(["profil"]));
  }, [profil]);

  useEffect(() => {
    profil && profil.data ? setOpen(true) : setOpen(false);
  }, [profil]);

  const meta = {
    title: "Profil",
    description: "Profil page description",
    url: "/profil",
  };

  const onRHFSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Column>
        <Meta metaData={meta} />

        {profil && <Alerts data={profil} open={open} closeModal={closeModal} />}

        <H2>Add information about each users</H2>
        <Message>
          Built with <strong>Formik</strong> forms library, prefilled initialValues
        </Message>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            address: "",
            postCode: "",
            city: "",
            phone: "",
          }}
          validationSchema={formizUser}
          onSubmit={(values) => {
            submitProfil(values);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                name="firstName"
                type="text"
                id="1"
                label="First name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              <Input
                name="lastName"
                id="2"
                label="Last name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              <Input
                name="address"
                id="3"
                label="Address"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
              <Input
                name="postCode"
                id="4"
                label="Post code"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postCode}
              />
              <Input
                name="city"
                id="5"
                label="City"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
              <Input
                name="phone"
                id="6"
                label="Phone"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />

              <BthForm>
                <LoadingButton type="submit" content="Submit" disabled={isSubmitting} />
              </BthForm>
            </Form>
          )}
        </Formik>

        <H2>Add information about each users with ReactHookForms</H2>
        <Message>
          Built with <strong>ReactHookFroms</strong> forms library, prefilled initialValues
        </Message>

        <ReactHookForm
          defaultValues={{
            firstName: "",
            region: "",
            phone: "",
          }}
          validationSchema={schemaUser}
          onSubmit={onRHFSubmit}
        >
          {({ control, handleSubmit, reset }) => (
            <RHFform onSubmit={handleSubmit(onRHFSubmit)}>
              <RHFInputField control={control} label="First name" name="firstName" />
              <RHFInputField control={control} label="email" name="email" />
              <Selector spinner data={["Administrator", "Marketing", "Translator", "Commercial"]} />
              <input type="submit" />
              <input type="button" onClick={() => reset()} value="Reset" />
            </RHFform>
          )}
        </ReactHookForm>
      </Column>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    profil: selectors.user.profilSelector(state),
    profilLoading: selectors.user.profilLoadingSelector(state),
  };
};

interface UserProps {
  profil: any;
  profilLoading: boolean;
  dispatch: AppDispatch;
}

export default connect(mapStateToProps)(Index);
