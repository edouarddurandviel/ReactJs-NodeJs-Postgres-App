import Button from "../Button";
import { AlertSession, AlertBody, AlertHeader, AlertFooter } from "./styles";

const Index = ({ error, handleLogout }: ErrorAlertProps) => {

  return (
    error && (
      <AlertSession>
        <AlertHeader>
            Unauthorized
        </AlertHeader>
        <AlertBody>
          {error.error}
          {error.message}
        </AlertBody>
        <AlertFooter>
          <Button
           onClick={() => {
              handleLogout()
          }}
           content="logout"
          />
         
          </AlertFooter> 
      </AlertSession>
      )
  );
};

interface ErrorAlertProps {
  error: any;
  handleLogout: () => void;
}

export default Index;
