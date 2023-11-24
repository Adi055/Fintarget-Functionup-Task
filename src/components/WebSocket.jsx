import { useEffect ,useState,useCallback} from "react";
import useWebSocket from "react-use-websocket";
import ApexChart from "./ApexChart";

const WebSocket = () => {
    const [messages,setMesseges]=useState([])  
    //const [chartData, setChartData] = useState([]);  
    
    const socketUrl = "wss://functionup.fintarget.in/ws?id=fintarget-functionup";

    const { lastMessage } = useWebSocket(socketUrl);

    useEffect(() => {
        if (lastMessage) {
            console.log("WebSocket message received:", lastMessage.data);
            const jsonData = JSON.parse(lastMessage.data);
            setMesseges((prevMessages) => [...prevMessages, jsonData]);
            
        }
    }, [lastMessage]);

console.log("data",messages);


// useEffect(() => {
//     if (messages.length > 0) {
//       const newChartData = transformData(messages[messages.length - 1]);
//       setChartData((prevData) => [...prevData, ...newChartData]);
//     }
//   }, [messages]);
  

// const transformData = (data) => {
//     // Assuming data is like {"Nifty": 19573.58, "BankNifty": 19886.0, "FinNifty": 19204.03}
//     // You need to transform it to an array of objects for each symbol
//     const currentTime = new Date().getTime();

    
//     return Object.keys(data).map((symbol,index) => ({
      
//      name:symbol,
     
//       data: [
//         {
//             x: currentTime, // You need to replace this with the actual timestamp
//             y: [data[symbol], data[symbol],data[symbol],Math.random()*1000 ],
//         },
        
//       ],
      
//     }));
    
//   };


    return (
        <div>
        <ApexChart data={messages} />
        </div>
    );
};

export default WebSocket;

