import { AuthAlert, AlertBody, AlertHeader, CloseAlert } from "./styles";

const Index = ({ data, closeModal }: ErrorAlertProps) => {

  return (
    data && (
      <AuthAlert>
        <AlertHeader>
            Unauthorized
          <CloseAlert
            onClick={() => {
              closeModal();
            }}
          >
            X
          </CloseAlert>
        </AlertHeader>
        <AlertBody>
          {data.error}
        </AlertBody> 
      </AuthAlert>
      )
  );
};

interface ErrorAlertProps {
  data: any;
  closeModal: () => void;
}

export default Index;
