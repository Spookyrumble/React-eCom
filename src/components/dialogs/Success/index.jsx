import * as S from "./index.styles";

const DialogSuccess = ({ open, onClose, message }) => {
  return (
    <S.Dialog open={open} onClose={onClose}>
      <S.DialogContent>
        <S.DialogContentText>{message}</S.DialogContentText>
      </S.DialogContent>
      <S.DialogActions>
        <S.Button onClick={onClose} color="primary">
          Close
        </S.Button>
      </S.DialogActions>
    </S.Dialog>
  );
};

export default DialogSuccess;
