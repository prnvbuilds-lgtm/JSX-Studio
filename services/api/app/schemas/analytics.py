from pydantic import BaseModel

class AnalyticsSummary(BaseModel):
    profileViews: int
    profileViewsDelta: str
    engagements: int
    engagementsDelta: str
    clicksToWebsite: int
    clicksDelta: str
    averageRating: float
    totalReviews: int
