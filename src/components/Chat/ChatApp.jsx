import React, { useState, useRef, useEffect } from 'react';
import { BsChatQuote } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import TechrenderLogo from '../../assets/images/TR_logo.webp'
import openai from 'openai'; 
import axios from 'axios'

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [openChat, setOpenChat] = useState(false);
  const [askForEmail, setAskForEmail] = useState(false);
  const [askForPhone, setAskForPhone] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const chatboxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // openai.apiKey =  process.env.VITE_APP_GPTAPIKEY
//   useEffect(() => {
//     // openai.configure({
//     //     apiKey: process.env.VITE_APP_GPTAPIKEY
//     //   });
//   }, []);


  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000)
  }, []);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (openChat && messages.length === 0) {
      setMessages([
        ...messages,
        { text: 'Welcome to Techrender! How can I help you.  ', sender: 'bot' }
      ]);
    }
  }, [openChat]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  }

  const handleSendMessage = async () => {
    if (!askForEmail) {
        setInputValue('');
        setAskForEmail(true);
        setMessages([
            ...messages,
            { text: 'Please enter your email:', sender: 'bot' }
          ]);    
    }
    else if (askForEmail && !email) {   
      setMessages([
        ...messages,
        { text: inputValue, sender: 'user' }
      ]);
      setEmail(prevEmail => inputValue);
      setInputValue('');
      setAskForPhone(true);

      setMessages(prevMessages => [
        ...prevMessages,
        { text: 'Please enter your phone number:', sender: 'bot' }
      ]);
    } else if (askForPhone && !phone) {
      setMessages([
        ...messages,
        { text: inputValue, sender: 'user' }
      ]);
      setPhone(prevPhone => inputValue);
      setInputValue('');
      setAskForPhone(false);
      setMessages(prevMessages => [
        ...prevMessages,
        // { text: 'Thank you! We have received your information.', sender: 'bot' }
        { text: 'We specialize in web and mobile app development, along with other digital services. Need a website, app, or other digital solutions? Just let us know how we can assist you today!', sender: 'bot' }
      ]);
    } else {
      if (inputValue.trim() !== '') {
        setMessages([
          ...messages,
          { text: inputValue, sender: 'user' }
        ]);
        console.log(inputValue)
          // openai.Completion.create({
          //   model: 'text-davinci-003',
          //   messages: [{ role: "user", content: inputValue }],
          // }).then(response => {
          //   console.log(response);
          //   setMessages(prevMessages => [
          //     ...prevMessages,
          //     { text: response.data.choices[0].message.content, sender: 'bot' }
          //   ]);
          // }).
          setTimeout(() => {
          setMessages(prevMessages => [
            ...prevMessages,
            { text: 'Please Contact : 9743061810', sender: 'bot' }
          ]);
        }, 500)
          // catch(error => {
          //   console.error('Error with OpenAI API request:', error.message);
          // })
        }   
           setInputValue('');
      }
    }

  return (
    <div className={`fixed mb-4 mr-4 ${isVisible ? 'bottom-14 right-2' : 'bottom-2 right-2'}`} style={{ zIndex: 9999 , transition: 'bottom 0.3s, right 0.3s' }}>
      {showButton && (
        <button
          className="bg-gray-200 rounded-full text-gray-900 py-2 px-2  hover:bg-deep_purple-800 hover:text-white-A700 transition duration-300"
          onClick={() => setOpenChat(!openChat)}
        >
          <BsChatQuote  style={{ fontSize: "2rem" }}  />
        </button>
      )}
      <div className={`fixed bottom-16 right-4 ml-2 w-auto sm:w-96 ${openChat ? 'transition duration-500 ' : 'hidden'}`}>
        <div className="bg-white-A700 shadow-xl rounded-lg max-w-lg w-full">
          {/* <div className="p-4 border-b bg-deep_purple-800 text-white-A700 rounded-t-lg flex justify-between items-center"> */}
            {/* <p className="text-white-A700 text-lg font-semibold">Techrender</p> */}
            <div className="p-4 border-b bg-gray-100 rounded-t-lg flex justify-between items-center">
            <img src={TechrenderLogo} className='w-40' alt="techrenderImage"/>
            <button
              className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              onClick={() => setOpenChat(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div ref={chatboxRef} className="p-4 h-80 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <p className={`bg-${message.sender === 'user' ? 'blue-500' : 'gray-200'} text-${message.sender === 'user' ? 'white-A700' : 'gray-700'} rounded-lg py-2 px-4 inline-block`}>{message.text}</p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex">
            <input
              type="text"
              placeholder="Type a message"
              onKeyDown={handleKeyDown}
              value={inputValue}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="text-white-A700 bg-deep_purple-800 text-white px-4 py-2 rounded-r-full hover:bg-blue-600 transition duration-300"
            >
              <AiOutlineSend/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;









     // try {
        //     const response = await axios.post('https://api.openai.com/v1/completions', {    
        //       model: 'text-davinci-003', 
        //       prompt: inputValue, 
        //       max_tokens: 50,
        //     }, {
        //       headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer process.env.VITE_APP_GPTAPIKEY` 
        //       }
        //     });
        //     console.log(response)
        //     const generatedText = response.data.choices[0].text;
        //     setTimeout(() => {
        //       setMessages(prevMessages => [
        //         ...prevMessages,
        //         { text: generatedText, sender: 'bot' }
        //       ]);
        //     }, 500);
        //   } 
        // catch (error) {
        //     console.error('Error calling GPT API:', error);
        //   }

 // openai.createChatCompletion({
            //   model: 'gpt-3.5-turbo',
            //   messages: [{ role: "user", content: inputValue }],
        //   openai.chatCompletion.create({
        //     model: 'text-davinci-003',
        //     messages: [{ role: "user", content: inputValue }],
        //   }).then(response => {
        //     console.log(response);
        //     setMessages(prevMessages => [
        //       ...prevMessages,
        //       { text: response.data.choices[0].message.content, sender: 'bot' }
        //     ]);
        //   }).catch(error => {
        //     console.error('Error with OpenAI API request:', error.message);
        //   })
        // },3000);




//commented before adding gpt api
// import React, { useState, useRef, useEffect } from 'react';
// import { BsChatQuote } from "react-icons/bs";
// import { AiOutlineSend } from "react-icons/ai";
// import TechrenderLogo from '../../assets/images/TR_logo.webp'

// function ChatApp() {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [openChat, setOpenChat] = useState(false);
//   const [askForEmail, setAskForEmail] = useState(false);
//   const [askForPhone, setAskForPhone] = useState(false);
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const chatboxRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [showButton, setShowButton] = useState(false);

//   const handleScroll = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowButton(true);
//     }, 3000)
//   }, []);

//   useEffect(() => {
//     if (chatboxRef.current) {
//       chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };


//   const handleSendMessage = () => {
//     if (!askForEmail) {
//         setInputValue('');
//         setAskForEmail(true);
//         setMessages([
//             ...messages,
//             { text: 'Please enter your email:', sender: 'bot' }
//           ]);    
//     }
//     else if (askForEmail && !email) {   
//       setMessages([
//         ...messages,
//         { text: inputValue, sender: 'user' }
//       ]);
//       setEmail(prevEmail => inputValue);
//       setInputValue('');
//       setAskForPhone(true);

//       setMessages(prevMessages => [
//         ...prevMessages,
//         { text: 'Please enter your phone number:', sender: 'bot' }
//       ]);
//     } else if (askForPhone && !phone) {
//       setMessages([
//         ...messages,
//         { text: inputValue, sender: 'user' }
//       ]);
//       setPhone(prevPhone => inputValue);
//       setInputValue('');
//       setAskForPhone(false);
//       setMessages(prevMessages => [
//         ...prevMessages,
//         { text: 'Thank you! We have received your information.', sender: 'bot' }
//       ]);
//     } else {
//       if (inputValue.trim() !== '') {
//         setMessages([
//           ...messages,
//           { text: inputValue, sender: 'user' }
//         ]);
//         setInputValue('');
//         setTimeout(() => {
//           setMessages(prevMessages => [
//             ...prevMessages,
//             { text: 'Coming Soon', sender: 'bot' }
//           ]);
//         }, 500);
//       }
//     }
//   };  
  
  

// //   const  handleSendMessage = async () => {
// //     if (!askForEmail) {
// //         setInputValue('');
// //         setAskForEmail(true);
// //         setMessages([
// //             ...messages,
// //             { text: 'Please enter your email:', sender: 'bot' }
// //           ]);    
// //     }
// //     else if (askForEmail && !email) {    
// //       setEmail(inputValue);
// //       console.log(inputValue)
// //       console.log(email)
// //        setMessages([
// //           ...messages,
// //           {  text: inputValue, sender: 'user'}
// //         ]);    
// //       setAskForPhone(true); 
// //       setInputValue(''); 
// //         setMessages([
// //           ...messages,
// //           { text: 'Please enter your phone number:', sender: 'bot' }
// //         ]);
     
// //     } else if(askForPhone && !phone) { 
// //       setPhone(inputValue);
// //       setInputValue('');
// //       setAskForPhone(false);
// //       setMessages([
// //         ...messages,
// //         { text: 'Thank you! We have received your information.', sender: 'bot' }
// //       ]);
// //     } else {
// //       if (inputValue.trim() !== '') {
// //         setMessages([
// //           ...messages,
// //           { text: inputValue, sender: 'user' }
// //         ]);
// //         setInputValue('');
// //         setTimeout(() => {
// //           setMessages([
// //             ...messages,
// //             { text: 'Coming Soon', sender: 'bot' }
// //           ]);
// //         }, 500);
// //       }
// //     }
// //   };

//   return (
//     <div className={`fixed mb-4 mr-4 ${isVisible ? 'bottom-14 right-2' : 'bottom-2 right-2'}`} style={{ zIndex: 9999 , transition: 'bottom 0.3s, right 0.3s' }}>
//       {showButton && (
//         <button
//           className="bg-gray-200 rounded-full text-gray-900 py-2 px-2  hover:bg-deep_purple-800 hover:text-white-A700 transition duration-300"
//           onClick={() => setOpenChat(!openChat)}
//         >
//           <BsChatQuote  style={{ fontSize: "2rem" }}  />
//         </button>
//       )}
//       <div className={`fixed bottom-16 right-4 w-auto sm:w-96 ${openChat ? 'transition duration-500 ' : 'hidden'}`}>
//         <div className="bg-white-A700 shadow-xl rounded-lg max-w-lg w-full">
//           {/* <div className="p-4 border-b bg-deep_purple-800 text-white-A700 rounded-t-lg flex justify-between items-center"> */}
//             {/* <p className="text-white-A700 text-lg font-semibold">Techrender</p> */}
//             <div className="p-4 border-b bg-gray-100 rounded-t-lg flex justify-between items-center">
//             <img src={TechrenderLogo} className='w-40' alt="techrenderImage"/>
//             <button
//               className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
//               onClick={() => setOpenChat(false)}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//               </svg>
//             </button>
//           </div>
//           <div ref={chatboxRef} className="p-4 h-80 overflow-y-auto">
//             {messages.map((message, index) => (
//               <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
//                 <p className={`bg-${message.sender === 'user' ? 'deep_purple-800' : 'gray-200'} text-${message.sender === 'user' ? 'white-A700' : 'gray-700'} rounded-lg py-2 px-4 inline-block`}>{message.text}</p>
//               </div>
//             ))}
//           </div>
//           <div className="p-4 border-t flex">
//             <input
//               type="text"
//               placeholder="Type a message"
//               value={inputValue}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               onClick={handleSendMessage}
//               className="text-white-A700 bg-deep_purple-800 text-white px-4 py-2 rounded-r-full hover:bg-blue-600 transition duration-300"
//             >
//               <AiOutlineSend/>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChatApp;



// const handleSendMessage1 = () => {
//     if (askForEmail && !email) {
//       setEmail(inputValue);
//       setInputValue('');
//       setAskForEmail(false);
//       setAskForPhone(true);
//       setMessages([...messages, { text: 'Please enter your phone number:', sender: 'bot' }]);
//     } else if (askForPhone && !phone) {
//       setPhone(inputValue);
//       setInputValue('');
//       setAskForPhone(false);
//       // You can handle further steps here after getting the phone number
//       // For now, let's close the chat
//       setOpenChat(false);
//     } else {
//       if (inputValue.trim() !== '') {
//         setMessages([...messages, { text: inputValue, sender: 'user' }]);
//         setInputValue('');
//         setTimeout(() => {
//           setMessages([...messages, { text: 'Coming Soon', sender: 'bot' }]);
//         }, 500);
//       }
//     }
//   };


//   const handleSendMessage2 = () => {
//     if (!askForEmail) {
//         setAskForEmail(true);
//         setMessages([
//           ...messages,
//           { text: 'Please enter your Email:', sender: 'bot' },
//         ]);
//     }
//     if (askForEmail && !email) {
//       setEmail(inputValue);
//       setInputValue('');
//       setAskForEmail(false);
//       setAskForPhone(true);
//       setMessages([
//         ...messages,
//         { text: 'Please enter your phone number:', sender: 'bot' },
//       ]);
//     } else if (askForPhone && !phone) {
//       setPhone(inputValue);
//       setInputValue('');
//       setAskForPhone(false);
//       setOpenChat(false);
//       setMessages([
//         ...messages,
//         { text: 'Thank you! We have received your information.', sender: 'bot' },
//       ]);
//     } else {
//       if (inputValue.trim() !== '') {
//         setMessages([...messages, { text: inputValue, sender: 'user' }]);
//         setInputValue('');
//         setTimeout(() => {
//           setMessages([...messages, { text: 'Coming Soon', sender: 'bot' }]);
//         }, 500);
//       }
//     }
//   };
  

//   const handleSendMessage3 = () => {
//     if (!askForEmail && !email) {
//         setMessages([
//             ...messages,
//             { text: 'Please enter your Email:', sender: 'bot' },
//         ]);
//         setAskForEmail(true);
//     } else if (askForEmail && !email) {
//         setEmail(inputValue);
//         setInputValue('');
//     } else if (!askForPhone) {
//         setMessages([
//             ...messages,
//             { text: 'Thank you! Please enter your phone number:', sender: 'bot' },
//         ]);
//         setAskForPhone(true);
//     } else if (askForPhone && email && !phone) {
//         setPhone(inputValue);
//         setMessages([...messages, { text: inputValue, sender: 'user' }]);
//         setInputValue('');
//     } else if (email && phone) {
//         setMessages([...messages, { text: inputValue, sender: 'user' }]);
//         setInputValue('');
//         setTimeout(() => {
//             setMessages([...messages, { text: 'Coming Soon', sender: 'bot' }]);
//         }, 500);
//     }
// }


// const handleSendMessage4 = () => {
//     if (!askForEmail && !email) {
//       setAskForEmail(true);
//       setMessages([
//         ...messages,
//         { text: 'Please enter your Email:', sender: 'bot' },
//       ]);
//     } else if (askForEmail && !email) {     
//       console.log(inputValue)
      
//       setMessages([...messages, { text: inputValue, sender: 'user' }]);
//       setEmail(inputValue); 
//       console.log(email)
//       setInputValue('');
//       setAskForEmail(false);
//       setAskForPhone(true);
//       setMessages([
//         ...messages,
//         { text: 'Please enter your phone number:', sender: 'bot' },
//       ]);
//     } else if (askForPhone && !phone) {
//       setMessages([...messages, { text: phone, sender: 'user' }]);
//       setPhone(inputValue);
//       setInputValue('');
//       setAskForPhone(false);
//       setMessages([
//         ...messages,
//         { text: 'Thank you! We have received your information.', sender: 'bot' },
//       ]);
//     } else {
//       if (inputValue.trim() !== '') {
//         setMessages([...messages, { text: inputValue, sender: 'user' }]);
//         setInputValue('');
//         setTimeout(() => {
//           setMessages([...messages, { text: 'Coming Soon', sender: 'bot' }]);
//         }, 500);
//       }
//     }
//   };









// import React, { useState, useRef, useEffect } from 'react';
// import { BsChatQuote } from "react-icons/bs";
// import { AiOutlineSend } from "react-icons/ai";

// function ChatApp() {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [openChat, setOpenChat] = useState(false);
//   const chatboxRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [showButton, setShowButton] = useState(false);


// /////this for scroll hidden ---------------------------------------------------------------------

//   const handleScroll = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   // Add scroll event listener when the component mounts
//  useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(()=>{
//     const timer = setTimeout(() => {
//         setShowButton(true);
//       }, 3000)
//   })


// //// chat functionality----------------------------------------------------------------------

//   useEffect(() => {
//     // Scroll to the bottom of the chatbox whenever messages change
//     if (chatboxRef.current) {
//       chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (inputValue.trim() !== '') {
//       // Add user message to the chat
//       setMessages([...messages, { text: inputValue, sender: 'user' }]);
//       setInputValue('');

//       // Simulate bot response after a delay
//       setTimeout(() => {
//         // setMessages([...messages, { text: 'This is a response from the chatbot.', sender: 'bot' }]);
//         setMessages([...messages, { text: 'Comming Soon', sender: 'bot' }]);
//       }, 500);
//     }
//   };

//   return (
//     <div className="fixed bottom-14 right-2 mb-4 mr-4"  style={{ zIndex: 9999 }}>
//     {showButton && (
//       <button
//         // className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
//         className="bg-gray-300 rounded-full  text-gray-900 py-2 px-2  hover:bg-deep_purple-800 hover:text-white-A700 transition duration-300"
//         onClick={() => setOpenChat(!openChat)}
//       >
//         <BsChatQuote  style={{ fontSize: "2rem" }}  />
//       </button>)}

      

//       <div className={`fixed bottom-16 right-4 w-96 ${openChat ? 'transition duration-500 ' : 'hidden'}`}>
//         <div className="bg-gray-200 shadow-xl rounded-lg max-w-lg w-full">
//           <div className="p-4 border-b bg-deep_purple-800 text-white-A700 rounded-t-lg flex justify-between items-center">
//             <p className="text-white-A700 text-lg font-semibold">Techrender</p>
//             <button
//               className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
//               onClick={() => setOpenChat(false)}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//               </svg>
//             </button>
//           </div>
//           <div ref={chatboxRef} className="p-4 h-80 overflow-y-auto">
//             {messages.map((message, index) => (
//               <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
//                 <p className={`bg-${message.sender === 'user' ? 'blue-500' : 'gray-200'} text-${message.sender === 'user' ? 'white' : 'gray-700'} rounded-lg py-2 px-4 inline-block`}>{message.text}</p>
//               </div>
//             ))}
//           </div>
//           <div className="p-4 border-t flex">
//             <input
//               type="text"
//               placeholder="Type a message"
//               value={inputValue}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               onClick={handleSendMessage}
//               className="text-white-A700 bg-deep_purple-800 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
//             >
//               <AiOutlineSend/>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChatApp;
