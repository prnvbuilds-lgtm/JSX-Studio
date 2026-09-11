from fastapi import APIRouter
from app.schemas.billing import BillingOverview

router = APIRouter(prefix="/billing", tags=["Billing"])

@router.get("/overview", response_model=BillingOverview)
async def get_billing_overview():
    return {
        "currentPlan": "Founding Hospitality Partner Tier",
        "status": "active",
        "nextBillingDate": "November 01, 2026",
        "amount": "$2,988 / year"
    }
