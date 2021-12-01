import { useEffect, useState } from "react";

const useSocketData = (uri: string) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<Record<string, unknown>>({});

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
