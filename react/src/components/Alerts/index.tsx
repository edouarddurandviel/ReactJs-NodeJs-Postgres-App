import { Alert } from "./styles";

const Index = ({ data, open, closeModal }: AlertProps) => {
  return (
    open && (
      <Alert
        color={(data.status === 200 && "green") || "red"}
        onClick={() => {
          closeModal();
        }}
      >
        {data.status === 200 ? "Success" : "Error"}
      </Alert>
    )
  );
};

interface AlertProps {
  data: any;
  open: boolean;
  closeModal: () => void;
}

export default Index;
