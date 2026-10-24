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
import { Controller, type SubmitHandler } from "react-hook-form";
import { schemaCreateCompany } from "../../schemas/userSchema";

const Index = ({ dispatch, user, companies, companiesLoading }: HomeProps) => {
  const [companyList, setCompanyList] = useState<Company[]>([]);
  const [createEntry, setCreateEntry] = useState<boolean | null>(null);
  const formRef = useRef("home") as any;
  const handleHomeForm = formRef.current;
  const KHFdefaultValues = {
    id: "",
    name: "",
    activity: "",
    owner: "",
  };

  // TODO: db or not db
  const meta = {
    title: "Dashboard",
    description: "dashboard page",
    url: "/dashbord",
  };

  useEffect(() => {
    dispatch(actions.socket.company.subscribeAllCompanies());
    dispatch(actions.company.getAllCompanies());

    return () => {
      dispatch(actions.socket.company.unsubscribeAllCompanies());
    };
  }, [dispatch]);

  useEffect(() => {
    if(companies && companies.length){
      setCompanyList(
        companies.map((c: any) => {
          return {
            id: c.id,
            name: c.name,
            activity: c.activity,
            owner: c.owner,
            imgpath: c.imgpath,
            ...(c.addresses && { addresses: c.addresses }),
            createdAt: c.createdAt,
            updatedAt: c.updatedAt,
          };
        }),
      );
    }

  }, [companies]);

  const submit: SubmitHandler<Company> = (values: Company) => {
    switch(createEntry){
      case true:
        dispatch(
          actions.company.addOneCompany({
            data: values,
          }),
        )
        break;
      default:
        dispatch(
          actions.company.updateOneCompany({
            params: {
              companyId: values.id,
            },
            data: values,
          }),
        );
      }

    handleHomeForm?.resetForm(KHFdefaultValues);
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
    handleHomeForm?.resetForm({
      id: data.id,
      name: data.name,
      activity: data.activity,
      owner: data.owner,
    });
  };

  const handleNewModal = () => {
    setCreateEntry(!createEntry);
    handleHomeForm?.resetForm(KHFdefaultValues);
  };

  return (
    <>
      <Meta metaData={meta} />

      <Container>
        <LeftColumn>
          <h3>{user?.loggedUser.email}</h3>
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
            defaultValues={KHFdefaultValues}
            validationSchema={schemaCreateCompany}
          >
            {({ control, handleSubmit, reset }) => (
              <RHFform_Row onSubmit={handleSubmit(submit)}>
                <RHFInputField control={control} name="id" type="hidden" style={{ padding: 0 }} />
                <RHFInputField control={control} label="Company name" name="name" />
                <RHFInputField control={control} label="Activity" name="activity" />
                <RHFInputField control={control} label="Owner" name="owner" />
                <Controller
                  name="imgpath"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="file"
                      onChange={(e) => field.onChange(e.target.files?.[0] ?? null)}
                    />
                  )}
                />

                <RHFform_Row_Btns>
                  <LoadingButton type="submit" content="Submit" />
                  <LoadingButton
                    type="button"
                    content="Reset"
                    onClick={() => reset(KHFdefaultValues)}
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
