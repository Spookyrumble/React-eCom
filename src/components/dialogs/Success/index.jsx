import * as S from "./index.styles";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DialogSuccess = ({ hidden, show, message }) => {
  const navigate = useNavigate();

  const HandleModalClose = () => {
    show(false);
    navigate(`/`);
  };

  if (hidden) {
    return null;
  }

  return (
    <S.Dialog>
      <S.DialogContent>
        <S.DialogContentText>{message}</S.DialogContentText>
      </S.DialogContent>
      <S.DialogActions>
        <S.Button onClick={() => HandleModalClose()}>Close</S.Button>
      </S.DialogActions>
    </S.Dialog>
  );
};

export default DialogSuccess;
