import * as S from "./index.styles";

// eslint-disable-next-line react/prop-types
const DialogSuccess = ({ hidden, show, message }) => {
  if (hidden) {
    return null;
  }

  return (
    <S.Dialog>
      <S.DialogContent>
        <S.DialogContentText>{message}</S.DialogContentText>
      </S.DialogContent>
      <S.DialogActions>
        <S.Button onClick={() => show(false)}>Close</S.Button>
      </S.DialogActions>
    </S.Dialog>
  );
};

export default DialogSuccess;
