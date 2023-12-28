const twilio = require('twilio');

// Twilio credentials
const accountSid = 'YOUR_ACCOUNT_SID'; // Replace with your Account SID
const authToken = 'YOUR_AUTH_TOKEN';   // Replace with your Auth Token

// Initialize Twilio client
const client = new twilio(accountSid, authToken);

// The Twilio phone number
const twilioPhoneNumber = 'YOUR_TWILIO_PHONE_NUMBER'; // Replace with your Twilio phone number

// Function to count messages
const countMessages = async (phoneNumber) => {
    try {
        const messages = await client.messages.list({from: phoneNumber});
        console.log(`Total Messages Sent: ${messages.length}`);
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
};

// Call the function
countMessages(twilioPhoneNumber);
