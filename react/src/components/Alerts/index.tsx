import { Alert, AlertBody, AlertHeader, CloseAlert } from "./styles";

const Index = ({ error, closeModal }: ErrorAlertProps) => {

  return (
    error && (
      <Alert color={(error.status === 200 && "green") || "red"}>
        <AlertHeader>
          {error.status === 200 ? "Success" : "Error"}
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
      </Alert>
    )
  );
};

interface ErrorAlertProps {
  error: any;
  closeModal: () => void;
}

export default Index;
