import React, { useState } from "react";

const WhatsAppSender = () => {
    const [message, setMessage] = useState('');

    const phoneNumber = '0111608331';
    const encodedMessage = encodeURIComponent(message);

    const handleSend = () => {
        if(message.trim()) {
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        }
    };

    return (
        <div>
            <textarea
                rows="4"
                cols="50"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ width:' 100%', marginBottom: '10px', borderRadius: '10px' }}
            />

            <button onClick={handleSend} style={{ padding: '10px 20px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px' }}>
                Send To whatsApp
            </button>
        </div>
    );
};

export default WhatsAppSender;