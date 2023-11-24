import { useEffect ,useState,useCallback} from "react";
import useWebSocket from "react-use-websocket";

const Nav=()=>{
    const [messages,setMesseges]=useState({})  
    

    const socketUrl = "wss://functionup.fintarget.in/ws?id=fintarget-functionup";

    const { lastMessage } = useWebSocket(socketUrl);

    useEffect(() => {
        if (lastMessage) {
            console.log("WebSocket message received:", lastMessage.data);
            const jsonData = JSON.parse(lastMessage.data);
            // setMesseges((prevMessages) => [...prevMessages, jsonData]);
            setMesseges(jsonData)
        }
    }, [lastMessage]);

console.log("nav",messages);


    return (
        <div  className="nav">

            <h4 >Nifty {messages.Nifty}</h4>
            <h4 >BankNifty {messages.Banknifty}</h4>
            <h4 >Finnifty {messages.Finnifty}</h4>
        </div>
    )
}

export default Nav