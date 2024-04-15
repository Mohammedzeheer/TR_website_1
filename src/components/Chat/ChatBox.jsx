import React, { useState, useRef, useEffect } from 'react';
import { BsChatQuote } from "react-icons/bs";

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [openChat, setOpenChat] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);

    // Function to handle scrolling and toggle visibility of chat button
    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Set showButton to true after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (openChat && messages.length === 0) {
            setMessages([
                { text: 'Welcome to Techrender! How can I assist you?', sender: 'bot' }
            ]);
        }
    }, [openChat]);

    return (  
        <div className={`fixed mb-4 mr-4 ${isVisible ? 'bottom-14 right-2' : 'bottom-2 right-2'}`} style={{ zIndex: 9999, transition: 'bottom 0.3s, right 0.3s' }}>
            {showButton && (
                <button
                    className="bg-gray-200 rounded-full text-gray-900 py-2 px-2  hover:bg-deep_purple-800 hover:text-white-A700 transition duration-300"
                    onClick={() => setOpenChat(!openChat)}
                >
                    <BsChatQuote style={{ fontSize: "2rem" }} />
                </button>
            )}
            <div className={`fixed bottom-16 right-4 ml-2 w-auto sm:w-96 ${openChat ? 'transition duration-500 ' : 'hidden'}`}>
                <div className="py-1 bg-white-A700 shadow-xl rounded-lg max-w-lg w-full relative">
                    <iframe className='h-96 w-auto sm:w-96 relative'       
                        src="https://app.chatgptbuilder.io/webchat/?p=1053993&ref=1701704215780"  
                        >
                     </iframe>
                    <button
                    className="absolute right-4 top-6 text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                    onClick={() => setOpenChat(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                 
                </div>
            </div>
        </div>
    );
}

export default ChatBox;