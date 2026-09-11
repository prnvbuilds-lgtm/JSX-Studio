from fastapi import APIRouter, HTTPException, status
from app.schemas.auth import Token, LoginRequest
from app.core.security import create_access_token

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/login", response_model=Token)
async def login(credentials: LoginRequest):
    # Dev / Stub validation
    if not credentials.email or not credentials.password:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email and password are required"
        )
    
    token = create_access_token(data={"sub": credentials.email, "role": "partner"})
    return {"access_token": token, "token_type": "bearer"}
