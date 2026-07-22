import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import * as selectors from "../../stores/rootSelectors";
import * as actions from "../../stores/rootActions";
import type { Address, Company } from "../../stores/company/interfaces";
import type { AppDispatch, RootState } from "../../stores";
import { Container, ContainerCentered, InlineWrapper } from "../../components/Layout/styles";
import { Button, LoadingButton, Meta, Image } from "../../components";
import { ReactHookForm, RHFInputField } from "../../components/RHF";
import { type SubmitHandler } from "react-hook-form";
import { schemaCreateAddress } from "../../schemas/userSchema";
import { RHFform_Row, RHFform_Row_Btns } from "../../components/RHF/Form/styles";

const Index = ({ dispatch, company, companyLoading }: DetailsProps) => {
  const [companyDetail, setCompanyDetail] = useState<Company | null>(null);
  const { companyId } = useParams();
  const formRef = useRef("address") as any;
  const emptyDefaultValues = {
    street: "",
    postcode: "",
    city: "",
  };

  const meta = {
    title: "Company details",
    description: "Company details page",
    url: `/detail/${companyId}`,
  };

  useEffect(() => {
    dispatch(
      actions.company.getOneCompany({
        params: {
          companyId: companyId,
        },
      }),
    );
    dispatch(actions.socket.company.subscribeOneCompany(companyId));

    return () => {
      dispatch(actions.socket.company.unsubscribeOneCompany(companyId));
    };
  }, [dispatch, companyId]);

  useEffect(() => {
    company && setCompanyDetail(company);
  }, [company]);

  const submit: SubmitHandler<Address> = (values: Address) => {
    dispatch(
      actions.company.addOneCompanyAddress({
        params: {
          companyId: companyId,
        },
        data: values,
      }),
    );

    formRef.current?.resetForm(emptyDefaultValues);
  };

  return (
    <>
      <Meta metaData={meta} />
      <Container>
        <Button
          content="Back"
          onClick={() => {
            history.back();
          }}
        />
        <h2>Company detail</h2>

        {companyLoading && <p>Loading...</p>}
        {companyDetail && (
          <ContainerCentered>
            <InlineWrapper>
              {companyDetail.imgpath && (
                <Image src={companyDetail.imgpath} alt={companyDetail.imgpath} />
              )}
              <p>{companyDetail.name}</p>
              <p>{companyDetail.owner}</p>
            </InlineWrapper>

            <ReactHookForm
              ref={formRef}
              defaultValues={emptyDefaultValues}
              validationSchema={schemaCreateAddress}
            >
              {({ control, handleSubmit, reset }) => (
                <RHFform_Row onSubmit={handleSubmit(submit)}>
                  <RHFInputField control={control} label="Street" name="street" />
                  <RHFInputField control={control} label="Post code" name="postcode" />
                  <RHFInputField control={control} label="City" name="city" />

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
          </ContainerCentered>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    company: selectors.company.companySelector(state),
    companyLoading: selectors.company.companyLoadingSelector(state),
  };
};

interface DetailsProps {
  company: Company | null;
  companyLoading: boolean;
  dispatch: AppDispatch;
}

export default connect(mapStateToProps)(Index);
