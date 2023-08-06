import axios from 'axios'

const botToken: string = '6323044108:AAEsViCQERy3cf0cD2yXBIP8KhKgzCdV9RI'
const chatId: string = '-806386661'

const sendMessageToTelegram = async (message: string): Promise<void> => {
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        chat_id: chatId,
        text: message,
      }
    )
    console.log('complete', response.data)
  } catch (error: any) {
    console.error('error:', error.message)
  }
}

