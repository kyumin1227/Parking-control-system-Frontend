import { useEffect } from "react";
import io from "socket.io-client";
import { DataType } from "../types";

interface GetDataProps {
  data?: DataType | null;

  setData: React.Dispatch<React.SetStateAction<DataType | null>>;

  prevData?: DataType | null;

  setPrevData: React.Dispatch<React.SetStateAction<DataType | null>>;
}

/**
 * socketio를 이용하여 데이터를 받아오는 컴포넌트
 * @param param0 setData, setPrevData
 */
const GetData = ({ setData, setPrevData }: GetDataProps) => {
  // 소켓 연결을 처음에 한 번만 설정하기 위해 useEffect로 감쌈
  useEffect(() => {
    const newSocket = io("ws://127.0.0.1:5002");

    // 최초 연결 시 콘솔에 출력
    newSocket.on("message", (newMessage: string) => {
      console.log(newMessage);
    });

    // 데이터 갱신 이벤트 리스너
    newSocket.on("data", (newData: DataType) => {
      setData((prev) => {
        setPrevData(prev);
        return newData;
      }); // 새 데이터를 저장
    });

    // 컴포넌트가 언마운트될 때 소켓 연결 해제
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return null;
};

export default GetData;
