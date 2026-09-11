from fastapi import APIRouter
from typing import List
from app.schemas.messaging import MessageThread, SendMessageRequest

router = APIRouter(prefix="/messaging", tags=["Messaging"])

@router.get("/threads", response_model=List[MessageThread])
async def get_message_threads():
    return [
        {
            "id": "thread-1",
            "senderName": "Jasmine Reed",
            "senderRole": "Senior Partner Success Lead",
            "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
            "lastMessage": "Your featured spotlight for Top Brunch Spots in West Palm Beach is live!",
            "timestamp": "10m ago",
            "unread": True
        }
    ]

@router.post("/send")
async def send_message(payload: SendMessageRequest):
    return {"status": "sent", "recipient_id": payload.recipient_id, "timestamp": "just now"}
