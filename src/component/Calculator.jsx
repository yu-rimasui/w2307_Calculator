import React, { useState } from "react";
import { DeleteIcon } from "./Icon";
import { AlertModal } from "./Modal";
import { SnakeAnimation, HatenaAnimation } from "./Animation";

const Calculator = () => {
  // 入力値保持
  const [figure, setFigure] = useState("");
  const btnText = [
    "🐇",
    "YELL",
    "AC",
    "削除",
    "1/x",
    "x^2",
    "root",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "？",
    "0",
    ".",
    "=",
  ];

  // Alert：trueで発火
  const [showAlert, setShowAlert] = useState(false);
  const handleAlertClose = () => setShowAlert(false);
  // SnakeAnimation：trueで発火
  const [showSnake, setShowSnake] = useState(false);
  // HatenaAnimation：trueで発火
  const [showHatena, setShowHatena] = useState(false);
  // 文字列判断Flag：trueでdisplay削除
  const [judgeFlag, setJudgeFlag] = useState(false);
  // 小数点Flag：trueで入力可能
  const [decimalFlag, setDecimalFlag] = useState(false);
  // 四則演算Flag：trueで四則演算切替え
  const [operatFlag, setOperatFlag] = useState(false);

  const onClickEvent = (index) => {
    switch (index) {
      case 16: // 1
      case 17: // 2
      case 18: // 3
      case 12: // 4
      case 13: // 5
      case 14: // 6
      case 8: // 7
      case 9: // 8
      case 10: // 9
        if (judgeFlag) {
          // 入力画面リセットのjudge
          setFigure(btnText[index]);
          setJudgeFlag(false);
        } else {
          setFigure(figure + btnText[index]);
        }
        setDecimalFlag(true);
        setOperatFlag(false);
        break;
      case 21: // 0
        if (judgeFlag) {
          // 入力画面リセットのjudge
          setFigure(btnText[index]);
        } else {
          setFigure(figure + btnText[index]);
        }
        setJudgeFlag(true);
        setDecimalFlag(true);
        setOperatFlag(false);
        break;

      case 0: // 🐇
        setFigure("うさぎじゃありません");
        setShowSnake(true);
        setJudgeFlag(true);
        break;
      case 1: // yell
        setFigure("いつも頑張っていて偉いよ～😊");
        break;
      case 2: // AC
        setFigure("");
        break;
      case 3: // (1文字)削除
        setFigure((prevVal) => prevVal.slice(0, -1));
        break;
      case 4: // 1/x
        setFigure("涙腺コルクできゅっ");
        setJudgeFlag(true);
        break;
      case 5: // x^2
        setFigure("これで、泣けまへーん");
        setJudgeFlag(true);
        break;
      case 6: // rootx
        setFigure("ここではありまへーん");
        setJudgeFlag(true);
        break;

      case 7: // ÷
        setJudgeFlag(false);
        setDecimalFlag(true);
        setOperatFlag((prevOpFlg) => {
          console.log("operateFlg:", prevOpFlg);
          if (prevOpFlg) {
            setFigure((prevVal) => prevVal.slice(0, -1));
          }
          // この段階でのprevOperatFlagが使用されているため、更新後の値ではないことに注意
          setFigure((prevFigure) => prevFigure + "/");
          return true; // setOperatFlagを更新
        });
        break;
      case 11: // ×
        setJudgeFlag(false);
        setDecimalFlag(true);
        setOperatFlag((prevOpFlg) => {
          console.log("operateFlg:", prevOpFlg);
          if (prevOpFlg) {
            setFigure((prevVal) => prevVal.slice(0, -1));
          }
          // この段階でのprevOperatFlagが使用されているため、更新後の値ではないことに注意
          setFigure((prevFigure) => prevFigure + "*");
          return true; // setOperatFlagを更新
        });
        break;
      case 15: // －
        setJudgeFlag(false);
        setDecimalFlag(true);
        setOperatFlag((prevOpFlg) => {
          console.log("operateFlg:", prevOpFlg);
          if (prevOpFlg) {
            setFigure((prevVal) => prevVal.slice(0, -1));
          }
          // この段階でのprevOperatFlagが使用されているため、更新後の値ではないことに注意
          setFigure((prevFigure) => prevFigure + "-");
          return true; // setOperatFlagを更新
        });
        break;
      case 19: // +
        setJudgeFlag(false);
        setDecimalFlag(true);
        setOperatFlag((prevOpFlg) => {
          console.log("operateFlg:", prevOpFlg);
          if (prevOpFlg) {
            setFigure((prevVal) => prevVal.slice(0, -1));
          }
          // この段階でのprevOperatFlagが使用されているため、更新後の値ではないことに注意
          setFigure((prevFigure) => prevFigure + "+");
          return true; // setOperatFlagを更新
        });
        break;
      case 20: // ？
        setFigure("うわぁぁ！");
        setShowHatena(true);
        setJudgeFlag(true);
        break;
      case 22: // .
        if (decimalFlag) {
          setFigure(figure + btnText[index]);
          setDecimalFlag(false);
        }
        break;

      case 23: // =
        let figureLastLiteral = figure.split("")[figure.split("").length - 1]; // 最後の文字
        // 最後の文字が数値のときのみ実行する
        if (isNaN(figureLastLiteral) === false) {
          setFigure(eval(figure));
        } else {
          setShowAlert(true);
        }
        setJudgeFlag(true);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="outline">
        <div className="showdisplay">{figure}</div>
        <hr />
        <div className="btnTextes">
          {btnText.map((text, index) => {
            if (text === "削除") {
              return (
                <button
                  key={index}
                  className="btnText"
                  onClick={() => {
                    onClickEvent(index);
                  }}
                >
                  <DeleteIcon />
                </button>
              );
            } else if (text === "x^2") {
              return (
                <button
                  key={index}
                  className="btnText"
                  onClick={() => {
                    onClickEvent(index);
                  }}
                >
                  x&sup2;
                </button>
              );
            } else if (text === "root") {
              return (
                <button
                  key={index}
                  className="btnText"
                  onClick={() => {
                    onClickEvent(index);
                  }}
                >
                  &radic;x
                </button>
              );
            } else if (text === "-") {
              return (
                <button
                  key={index}
                  className="btnText"
                  onClick={() => {
                    onClickEvent(index);
                  }}
                >
                  &minus;
                </button>
              );
            } else {
              return (
                <button
                  key={index}
                  className="btnText"
                  onClick={() => {
                    onClickEvent(index);
                  }}
                >
                  {text}
                </button>
              );
            }
          })}
        </div>
        <SnakeAnimation showSnake={showSnake} setShowSnake={setShowSnake} />
        <HatenaAnimation
          showHatena={showHatena}
          setShowHatena={setShowHatena}
        />
      </div>
      <AlertModal showAlert={showAlert} onHide={handleAlertClose} />
    </>
  );
};

export default Calculator;
