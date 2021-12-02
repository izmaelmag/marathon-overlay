import { useEffect, useState } from "react";

const useSocketData = (uri: string): [WebSocketResponse, boolean] => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Initialize response data
  const [data, setData] = useState<WebSocketResponse>({
    runners: [],
    donationGoal: 0,
    seconds: 0,
    donates: 0,
  });

  // Create socket on app start
  useEffect(() => setSocket(new WebSocket(uri)), []);

  // Initiate socket handlers after connection and socket instance creation
  useEffect(() => {
    if (socket) {
      try {
        socket.onopen = () => setIsOpen(true);
        socket.onclose = () => setIsOpen(false);
        socket.onmessage = ({ data }: MessageEvent) => {
          setData(JSON.parse(data));
        };
      } catch (error) {
        console.error(error);
      }
    }

    // Close on unmount
    return () => socket?.close(1000, "Disconnected");
  }, [socket]);

  return [data, isOpen];
};

export default useSocketData;
