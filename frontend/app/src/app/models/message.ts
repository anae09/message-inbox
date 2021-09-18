export interface Message {
  threadId: string,
  sender: string,
  receiver: string,
  timestamp: Date,
  body: string
}
