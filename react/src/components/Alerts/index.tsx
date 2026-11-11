import { AuthAlert, AlertBody, AlertHeader, CloseAlert } from "./styles";

const Index = ({ error, closeModal }: ErrorAlertProps) => {

  return (
    error && (
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
          {error.message}
        </AlertBody> 
      </AuthAlert>
      )
  );
};

interface ErrorAlertProps {
  error: any;
  closeModal: () => void;
}

export default Index;
