import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const AlertModal = (props) => {
  const { showAlert, onHide } = props;
  return (
    <>
      <Modal showAlert={showAlert} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            入力欄の最後に記号を入れるとうまく作動しません。
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          おはよう😆😆😆もう昼だった🤣🤣🤣今はね、昼休みなの‼️ ‼️
          あっ、もうすぐ休憩終わっちゃうよ😢😢ゆーりは、なにしてるの❓❓❓
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            ✖
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
