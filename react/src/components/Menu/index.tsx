import { NavLink } from "react-router";
import { Menu } from "../Layout/styles";
import { useContext, useEffect, useMemo, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { handleSubmitSpeechUterance } from "../../speech";
import Button from "../Button";

const Index = () => {
  const [seletedTextArea, setSelectedTextArea] = useState<string | boolean>(false);
  const currentUser = useContext(UserContext);
  const contextValue = useMemo(
    () => ({
      currentUser,
    }),
    [currentUser],
  );

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (selection && selection !== null) {
        setSelectedTextArea(selection.toString());
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  return (
    <Menu>
      <NavLink className="links" to="/">
        Home
      </NavLink>
      {contextValue && (
        <>
          <NavLink className="links" to="/user/add">
            Create user
          </NavLink>
          <NavLink className="links" to="/user/profil">
            User profil
          </NavLink>
          <Button
            disabled={typeof seletedTextArea === "boolean"}
            content="Voices"
            onClick={() => {
              handleSubmitSpeechUterance(seletedTextArea);
            }}
          />
        </>
      )}
    </Menu>
  );
};

export default Index;
