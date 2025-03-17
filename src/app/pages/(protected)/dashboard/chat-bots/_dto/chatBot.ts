export interface Chatbot {
    chatbot_name: string;
    company?: string;
    objective?: string;
    platforms: string;
    performance_meting?: string;
    status: string;
    date_time: string;
    url:string;
    UUID:string
    docs?:[]
  }

  export interface UpadateChatbot {
    chatbot_name: string;
    company?: string;
    objective?: string;
    platforms: string;
    status: string;
  }