import React, { useState } from 'react';
import { FaPaperPlane, FaSearch, FaUserCircle } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const Chat = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState({
    'Ali Ahmad': [
      { text: 'Hello!', sender: 'client' },
      { text: 'Hi! How are you?', sender: 'me' },
    ],
    'John Doe': [],
    'Jane Smith': [],
    'Mike Johnson': [],
  });

  const clients = [
    { name: 'Ali Ahmad', message: 'Last message from client', time: '10:30 PM' },
    { name: 'John Doe', message: 'Last message from client', time: '11:30 PM' },
    { name: 'Jane Smith', message: 'Last message from client', time: '12:30 PM' },
    { name: 'Mike Johnson', message: 'Last message from client', time: '09:30 PM' },
  ];

  const members = [
    { name: 'Admin', role: 'Admin' },
    { name: 'Client', role: 'Client' },
  ];

  const documents = [
    { type: 'Client', name: 'Name of the document', time: '10:30 PM' },
    { type: 'Client', name: 'Name of the document', time: '11:30 PM' },
    { type: 'Client', name: 'Name of the document', time: '12:30 PM' },
    { type: 'Admin', name: 'Name of the document', time: '09:30 PM' },
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (message.trim() && selectedClient) {
      setChats(prevChats => ({
        ...prevChats,
        [selectedClient.name]: [
          ...prevChats[selectedClient.name],
          { text: message, sender: 'me' },
        ],
      }));
      setMessage('');
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log('File uploaded:', file);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 p-4 bg-gray-100">
        <div className="p-4 max-w-sm mx-auto">
          <h2 className="text-2xl font-bold mb-4">Clients</h2>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>
          <div className="space-y-2">
            {filteredClients.map((client, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white rounded-lg shadow-md cursor-pointer"
                onClick={() => setSelectedClient(client)}
              >
                <FaUserCircle className="text-3xl text-gray-400 mr-4" />
                <div className="flex-1">
                  <div className="font-semibold">{client.name}</div>
                  <div className="text-sm text-gray-500">{client.message}</div>
                </div>
                <div className="text-sm text-gray-500">{client.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-1/2 p-4 bg-white">
        {selectedClient ? (
          <div>
            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md mb-4">
              <FaUserCircle className="text-3xl text-gray-400 mr-4" />
              <div className="flex-1">
                <div className="font-semibold">{selectedClient.name}</div>
                <div className="text-sm text-gray-500">Online</div>
              </div>
            </div>
            <div className="flex flex-col h-96 overflow-y-auto bg-gray-50 p-4">
              {chats[selectedClient.name].map((msg, index) => (
                <div
                  key={index}
                  className={`flex mb-4 ${msg.sender === 'me' ? 'justify-end' : ''}`}
                >
                  <div
                    className={`${
                      msg.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    } p-3 rounded-lg max-w-xs`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 p-2 bg-blue-500 text-white rounded-full"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-20">Select a client to start chatting</div>
        )}
      </div>

      <div className="w-1/4 p-4 bg-gray-100">
        <div>
          <h2 className="text-xl font-bold mb-4">Chat members</h2>
          <div className="space-y-2">
            {members.map((member, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <FaUserCircle className="text-3xl text-gray-400 mr-4" />
                <div>
                  <div className="font-semibold">{member.name}</div>
                  <div className="text-sm text-gray-500">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2">
          <h2 className="text-xl font-bold mb-2"> Client Documents</h2>
          <div>
            <div className="space-y-2">
              {documents.filter(doc => doc.type === 'Client').map((doc, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                  <img src="path_to_pdf_icon" alt="PDF" className="w-10 h-10 mr-4" />
                  <div>
                    <div className="font-semibold">{doc.name}</div>
                    <div className="text-sm text-gray-500">{doc.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-lg font-semibold mb-1">Admin</h3>
            <div className="space-y-1">
              {documents.filter(doc => doc.type === 'Admin').map((doc, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                  <img src="path_to_pdf_icon" alt="PDF" className="w-10 h-10 mr-8" />
                  <div>
                    <div className="font-semibold">{doc.name}</div>
                    <div className="text-sm text-gray-500">{doc.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-1">
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="p-2 bg-blue-500 text-white rounded-full cursor-pointer"
              >
                Submit PDF File
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
