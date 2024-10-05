import React, { useState } from "react";
import { DeleteIcon } from "./Icon";
import { AlertModal } from "./Modal";
import { SnakeAnimation, HatenaAnimation } from "./Animation";

const Calculator = () => {
  // 入力値保持
  const [figure, setFigure] = useState("");
  const btnText = [
    "🐇",
    "☘",
    "AC",
    "削除",
    "tip1",
    "tip2",
    "tip3",
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
        setFigure("This is not a rabbit.");
        setShowSnake(true);
        setJudgeFlag(true);
        break;
      case 1: // ☘
        setFigure(
          "My potential is limitless! Everything can change depending on my choices and actions!!"
        );
        break;
      case 2: // AC
        setFigure("");
        break;
      case 3: // (1文字)削除
        setFigure((prevVal) => prevVal.slice(0, -1));
        break;
      case 4: // tip1
        setFigure(
          "自分の生まれた月に4を掛け、9を足し、25を掛けてから生まれた日を足してください。最後に225を引くと、誕生日と同じ数字が出ます。"
        );
        setJudgeFlag(true);
        break;
      case 5: // tip2
        setFigure(
          "「142857」を使った計算では、1から7まで掛けるとサイクルが現れます。例えば、142857×7=999999になる。この数は1/7の循環小数だからです。"
        );
        setJudgeFlag(true);
        break;
      case 6: // tip3
        setFigure(
          "好きな数字を思い浮かべ、次の手順を実行してください。➀数字に3を足す ➁2を掛ける ➂4を足す ➃2で割る ➄最初に選んだ数字を引く。結果は常に5になります。"
        );
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
        setFigure("This is Elizabeth.");
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
