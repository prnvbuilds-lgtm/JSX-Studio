from fastapi import APIRouter
from app.schemas.analytics import AnalyticsSummary

router = APIRouter(prefix="/analytics", tags=["Analytics"])

@router.get("/summary", response_model=AnalyticsSummary)
async def get_analytics_summary():
    return {
        "profileViews": 14820,
        "profileViewsDelta": "+18%",
        "engagements": 3410,
        "engagementsDelta": "+24%",
        "clicksToWebsite": 1980,
        "clicksDelta": "+12%",
        "averageRating": 4.9,
        "totalReviews": 182
    }
