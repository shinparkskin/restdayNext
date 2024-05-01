"use client";
import { useState } from "react";
import { Button, TextField, CircularProgress, Box } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ResultIcon from "./resultIcon";


// export const metadata = {
//   icons:{
//     icon:'images/icon.png'
//   },
//   title: '체험단시대 남은기간 조회하기',
//   openGraph: {
//     title: '체험단시대 남은기간 조회하기',
//     url: 'restday-next.vercel.app',
//     siteName: 'restday-next.vercel.app',
//     images: [
//       {
//         url: 'https://exgen.s3.ap-northeast-2.amazonaws.com/icon.png', // Must be an absolute URL
//         width: 800,
//         height: 600,
//       }
//     ],
//     locale: 'ko_Kr',
//     type: 'website',
//   },
// }

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showMessage, setShowMessage] = useState(false); // 메시지 표시 상태
  const [daysLeft, setDaysLeft] = useState(""); // 남은 일수를 저장
  const [result, setResult] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const color = result === "데이터가 없습니다." ? "#FF0000" : "currentColor";

  const handleClick = async () => {
    setLoading(true); // 로딩 시작
    setShowMessage(false); // 요청이 시작될 때 메시지를 숨깁니다.

    if (!inputValue.trim()) { // inputValue가 비어 있는 경우를 검사합니다.
      setResult("핸드폰번호를 입력하세요"); // 경고 메시지를 setResult를 통해 저장
      setShowMessage(true); // 메시지를 보여줍니다.
      setLoading(false); // 로딩 종료
      return; // 함수 실행을 여기서 종료합니다.
    }

    try {
      const response = await axios.get(
        `https://w4ol755ncxzk7fheqkrxecxyxu0scqpv.lambda-url.ap-northeast-2.on.aws/remainingdays?contact=${inputValue}`,
        {
          headers: { Accept: "application/json" },
        }
      );
      // setDaysLeft(response.data['남은기간']); // 응답에서 남은 일수를 가져와 상태에 저장

      setShowMessage(true); // 메시지 표시

      let text = `${response?.data["남은기간"]}일 남았습니다.`;
      setResult(text);
    } catch (error) {
      console.error("Error:", error);
      setShowMessage(true); // 메시지 표시
      setResult("데이타가 없습니다.");
    }
    setLoading(false); // 로딩 종료
  };

  return (
    <div className="f-section-large">
      <div className="f-container-regular">
        <div className="f-header-title-wrapper-center">
          <div className="f-margin-bottom-49">
            <h1 className="f-h1-heading">남은 서비스 조회하기✔️</h1>
          </div>
          <div className="f-margin-bottom-40">
            <p className="f-paragraph-large">
              핸드폰 번호를 통해서 남은 일자를 조회하세요
            </p>
          </div>
          <div className="f-header-button-middle">
            <div className="form-block w-form">
              <div>
                <div className="f-field-wrapper-2">
                  <div className="f-field-icon-wrapper">
                    <div className="f-field-wrapper-3">
                      <input
                        className="f-field-input w-input"
                        maxLength="256"
                        name="Input-Field-Help"
                        data-name="Input Field Help"
                        placeholder="연락처를 입력하세요"
                        type="text"
                        id="Text-Disabled"
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-form-done"></div>
              <div className="w-form-fail"></div>
            </div>
            <button
              className={`f-button-apple w-inline-block ${
                loading ? "loading" : ""
              }`}
              onClick={handleClick}
              disabled={loading}
            >
              {loading ? <div className="loader"></div> : <div>검색</div>}
            </button>
            {showMessage && (
              <>
                <div className="f-alert-regular">

                    {result === "데이타가 없습니다." ? (
                      <div></div>
                    ) : (
                      <div className="f-alert-success">
                      <div className="f-alert-icon w-embed">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20V20ZM11.003 16L6.76 11.757L8.174 10.343L11.003 13.172L16.659 7.515L18.074 8.929L11.003 16Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      </div>
                    )}

                  <div className="f-alert-content">
                    <div className="centered-text">
                      <p>{result}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
