import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import * as selectors from "../../stores/rootSelectors";
import * as actions from "../../stores/rootActions";
import type { Company } from "../../stores/company/interfaces";
import type { UserConnected } from "../../stores/auth/interfaces";
import type { AppDispatch, RootState } from "../../stores";
import { Button, LoadingButton, Meta, MainList } from "../../components";
import {
  Container,
  FormActions,
  FormActionsLabel,
  LeftColumn,
  RightColumn,
} from "../../components/Layout/styles";
import { ReactHookForm, RHFInputField } from "../../components/RHF";
import { RHFform_Row, RHFform_Row_Btns } from "../../components/RHF/Form/styles";
import type { SubmitHandler } from "react-hook-form";
import { schemaCreateCompany } from "../../schemas/userSchema";

const Index = ({ dispatch, user, companies, companiesLoading }: HomeProps) => {
  const [companyList, setCompanyList] = useState<Company[]>([]);
  const [createEntry, setCreateEntry] = useState<boolean | null>(null);
  const formRef = useRef("home") as any;
  const emptyDefaultValues = {
    id: "",
    name: "",
    activity: "",
    owner: "",
  };

  const meta = {
    title: "Dashboard",
    description: "dashboard page",
    url: "/dashbord",
  };

  useEffect(() => {
    dispatch(actions.socket.subscribeAllCompanies());
    dispatch(actions.company.getAllCompanies());

    return () => {
      dispatch(actions.socket.unsubscribeAllCompanies());
    };
  }, [dispatch]);

  useEffect(() => {
   
    companies?.length &&
      setCompanyList(
        companies.map((e) => {
          return {
            id: e.id,
            name: e.name,
            activity: e.activity,
            owner: e.owner,
            ...e.addresses && {addresses: e.addresses},
            createdAt: e.createdAt,
            updatedAt: e.updatedAt,
          };
        }),
      );
  }, [companies]);

  const submit: SubmitHandler<Company> = (values: Company) => {
    createEntry
      ? dispatch(
          actions.company.addOneCompany({
            data: values,
          }),
        )
      : dispatch(
          actions.company.updateOneCompany({
            params: {
              companyId: values.id,
            },
            data: values,
          }),
        );
    formRef.current?.resetForm(emptyDefaultValues);
  };

  const handleDeleteItem = (item: string) => {
    dispatch(
      actions.company.deleteOneCompany({
        params: {
          companyId: item,
        },
      }),
    );
  };

  const handleEditModal = (data: Company) => {
    setCreateEntry(false);
    formRef.current?.resetForm({
      id: data.id,
      name: data.name,
      activity: data.activity,
      owner: data.owner,
    });
  };

  const handleNewModal = () => {
    setCreateEntry(!createEntry);
    formRef.current?.resetForm(emptyDefaultValues);
  };

  return (
    <>
      <Meta metaData={meta} />

      <Container>
        <LeftColumn>
          <h3>{user?.userPermissions.email}</h3>
          <p>
            <strong>Cache definition</strong> for every viewed company detail pages. It prevents
            from making any <strong>unnecessary requests</strong> twice. Content is stored in a Map.
            It could be sessionStorage
          </p>
          <p>
            Home page is using <strong>URF</strong> forms. User profil has been built with
            UseReactForm. <strong>Create User</strong> page uses old <strong>Formik</strong> form
            library.
          </p>
          <FormActions>
            <Button
              content={createEntry ? "Close" : "Add new entry"}
              onClick={() => handleNewModal()}
            />

            <FormActionsLabel>{createEntry ? "Add new entry" : "Edit document"}</FormActionsLabel>
          </FormActions>

          <ReactHookForm
            ref={formRef}
            defaultValues={emptyDefaultValues}
            validationSchema={schemaCreateCompany}
          >
            {({ control, handleSubmit, reset }) => (
              <RHFform_Row onSubmit={handleSubmit(submit)}>
                <RHFInputField control={control} name="id" type="hidden" />
                <RHFInputField control={control} label="Company name" name="name" />
                <RHFInputField control={control} label="Activity" name="activity" />
                <RHFInputField control={control} label="Owner" name="owner" />

                <RHFform_Row_Btns>
                  <LoadingButton type="submit" content="Submit" />
                  <LoadingButton
                    type="button"
                    content="Reset"
                    onClick={() => reset(emptyDefaultValues)}
                  />
                </RHFform_Row_Btns>
              </RHFform_Row>
            )}
          </ReactHookForm>
        </LeftColumn>
        <RightColumn>
          {(companiesLoading && <div>Is loading...</div>) ||
            (companyList &&
              companyList.map((c) => (
                <MainList
                  key={c.id}
                  data={c}
                  handleEditModal={handleEditModal}
                  handleDeleteItem={handleDeleteItem}
                />
              )))}
        </RightColumn>
      </Container>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    user: selectors.auth.authSelector(state),
    companies: selectors.company.companiesSelector(state),
    companiesLoading: selectors.company.companiesLoadingSelector(state),
    saveLoading: selectors.company.addCompanyLoadingSelector(state),
    addCompanySuccess: selectors.company.addCompanySuccessSelector(state),
  };
};

interface HomeProps {
  user: UserConnected | null;
  companies: Company[] | null;
  companiesLoading: boolean;
  saveLoading: boolean;
  addCompanySuccess: Company[] | boolean;
  dispatch: AppDispatch;
}

export default connect(mapStateToProps)(Index);
