from pydantic import BaseModel
from typing import Optional

class MessageThread(BaseModel):
    id: str
    senderName: str
    senderRole: str
    avatarUrl: Optional[str] = None
    lastMessage: str
    timestamp: str
    unread: bool

class SendMessageRequest(BaseModel):
    recipient_id: str
    content: str
