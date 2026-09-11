from pydantic import BaseModel
from typing import Optional

class Partner(BaseModel):
    id: str
    email: str
    business_name: str
    partner_tier: str = "standard"
    is_verified: bool = True
    headquarters: Optional[str] = None
