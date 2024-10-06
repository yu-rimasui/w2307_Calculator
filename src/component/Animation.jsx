import React, { useEffect, useRef, useState } from "react";

import Snake from "../img/snake.png";
import Hatena from "../img/zbs.png";

// へびもどき
export const SnakeAnimation = (props) => {
  // propsはコンポーネントにのみ渡せる
  const { showSnake, setShowSnake } = props;
  const inputRef = useRef(null);
  const [reAnime, setReAnime] = useState(false);

  const onAnimationEnd = () => {
    // useRef：htmlのタグを直接操作できる
    // 従来e取ってきてたけどいらない
    console.log(inputRef.current);
    // 特定のclassNameを空にする
    // classNameを付け直すことでアニメーション繰り返す
    inputRef.current.className = "";

    // アニメーション無効化
    inputRef.current.style.animtion = "none";

    setReAnime(!reAnime);
    setShowSnake(false);
  };

  //
  useEffect(() => {
    setTimeout(() => {
      // 第2引数(ms)遅延させて第1引数関数実行
      if (inputRef.current) {
        // アニメーションの無効化をnullで解く
        // 連続的に動かすと機械が認識できないから、
        // 遅延させてnoneの時間をつくる
        inputRef.current.style.animation = null;
      }
    }, 10);
    // 再びclassNameをつける
    if (inputRef.current) {
      inputRef.current.className = "snake-animation";
    }
  }, [reAnime]);

  if (showSnake) {
    return (
      <div
        ref={inputRef}
        onAnimationEnd={onAnimationEnd}
        className="snake-animation"
      >
        <img src={Snake} alt="へびもどき" />
      </div>
    );
  }
};

// エリザベスもどき
export const HatenaAnimation = (props) => {
  // propsはコンポーネントにのみ渡せる
  const { showHatena, setShowHatena } = props;
  const inputRef = useRef(null);
  const [reAnime, setReAnime] = useState(false);

  const onAnimationEnd = () => {
    // useRef：htmlのタグを直接操作できる
    // 従来e取ってきてたけどいらない
    console.log(inputRef.current);
    // 特定のclassNameを空にする
    // classNameを付け直すことでアニメーション繰り返す
    inputRef.current.className = "";

    // アニメーション無効化
    inputRef.current.style.animtion = "none";

    setReAnime(!reAnime);
    setShowHatena(false);
  };

  //
  useEffect(() => {
    setTimeout(() => {
      // 第2引数(ms)遅延させて第1引数関数実行
      if (inputRef.current) {
        // アニメーションの無効化をnullで解く
        // 連続的に動かすと機械が認識できないから、
        // 遅延させてnoneの時間をつくる
        inputRef.current.style.animation = null;
      }
    }, 10);
    // 再びclassNameをつける
    if (inputRef.current) {
      inputRef.current.className = "hatena-animation";
    }
  }, [reAnime]);

  if (showHatena) {
    return (
      <div
        ref={inputRef}
        onAnimationEnd={onAnimationEnd}
        className="hatena-animation"
      >
        <img src={Hatena} alt="エリザベス" />
      </div>
    );
  }
};
