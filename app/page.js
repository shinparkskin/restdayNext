"use client";
import { useState } from "react";

import axios from "axios";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ResultIcon from "./resultIcon";
import { Checkbox } from "@nextui-org/react";
import { Input, Button } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [inputValue, setInputValue] = useState("");
  const [showMessage, setShowMessage] = useState(false); // 메시지 표시 상태
  const [daysLeft, setDaysLeft] = useState(""); // 남은 일수를 저장
  const [result, setResult] = useState("");
  const [resultDate, setResultDate] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const color = result === "데이터가 없습니다." ? "#FF0000" : "currentColor";

  const handleClick = async () => {
    setIsError(false);
    setLoading(true); // 로딩 시작

    if (inputValue === "") {
      onOpen();
      setIsError(true);
      setErrorMessage("핸드폰 번호를 입력해주세요");
      setLoading(false); // 로딩 종료
      return;
    }

    try {
      const response = await axios.get(
        `https://w4ol755ncxzk7fheqkrxecxyxu0scqpv.lambda-url.ap-northeast-2.on.aws/remainingdays?contact=${inputValue}`,
        {
          headers: { Accept: "application/json" },
        }
      );

      console.log(response.data);
      if (parseInt(response?.data["남은기간"]) < 0) {
        onOpen();
        setIsError(true);
        setErrorMessage("서비스가 만료되었습니다. 재등록 부탁드려요❤️");
        setLoading(false); // 로딩 종료
        return;
      }

      onOpen();
      setResult(response?.data["남은기간"]);
      setResultDate(response?.data["마감"]);
    } catch (error) {
      onOpen();
      setIsError(true);
      setErrorMessage("회원 명단에 없습니다.");
      setLoading(false); // 로딩 종료
    }
    setLoading(false); // 로딩 종료
  };

  return (
    <section className="bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 justify-center items-center text-2xl">
                안내
              </ModalHeader>
              <ModalBody className="flex flex-col gap-1 justify-center items-center text-lg font-bold">
                {isError ? (
                  <p>{errorMessage}</p>
                ) : (
                  <>
                    <p>마감일은 {resultDate}로,</p>
                    <p>총 {result}일 남았습니다!</p>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="flex flex-col max-w-screen-md gap-y-4 justify-center items-center">
          <h2 className="text-center mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            체험단시대와 함께 하는 남은 기간입니다 😍
          </h2>
          <p className=" text-gray-500 sm:text-xl  text-center font-bold text-lg">
            동명이인이 많아<br></br>
            핸드폰 번호로 조회 도와드릴께요 ❤️
          </p>

          <div className="flex justify-center items-center w-full md:w-1/2 flex-wrap md:flex-nowrap gap-4">
            <Input
              type="tel"
              label="phone"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-5">
            <Button
              onClick={handleClick}
              color="primary"
              size="lg"
              isLoading={loading}
            >
              조회하기
            </Button>
          </div>
        </div>
      </div>
      <Card className="mx-8 max-w-[400px]">
        <CardHeader className="flex gap-3 items-center">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="/images/logoex.png"
            width={40}
          />
          <div className="flex flex-col justify-center items-center font-bold">
            체험단시대
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="py-2 flex  ">
          수정사항은 상담 카톡에 아래처럼 말씀주시면 바로 반영 해드릴께요!
        </CardBody>
        <Divider />
        <CardFooter>
          마감일이 5.27로 되어있는데 ~이래서 5.30이 맞아요. 확인해주세요!!
        </CardFooter>
      </Card>
      <div class="py-8  mx-auto max-w-screen-xl sm:py-16 lg:px-6 gap-x-4 grid grid-cols-1 md:grid-cols-2">
        <Link target="_blank" href='https://www.youtube.com/@user-wb6rf5ie2z'>
          <Image
            isBlurred
            width={200}
            src="/images/1.jpg"
            alt="NextUI Album Cover"
            className=""
          />
        </Link>
        <Link target="_blank" href='https://www.instagram.com/blog_city.ceo/'>
          <Image
            isBlurred
            width={200}
            src="/images/2.jpg"
            alt="NextUI Album Cover"
            className=""
          />
        </Link>
        {/* <Link target="_blank" href='https://blog.naver.com/shinparkskin'>
          <Image
            isBlurred
            width={200}
            src="/images/3.jpg"
            alt="NextUI Album Cover"
            className=""
          />
        </Link> */}
        <Link target="_blank" href='https://cafe.naver.com/katorifea'>
          <Image
            isBlurred
            width={200}
            src="/images/4.jpg"
            alt="NextUI Album Cover"
            className=""
          />
        </Link>
      </div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h2 class="mb-4 text-2xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            평생 함께 해주실 거죠? 🙏
          </h2>
        </div>
      </div>
    </section>
  );
}
