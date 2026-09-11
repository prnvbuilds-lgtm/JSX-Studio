from pydantic import BaseModel

class BillingOverview(BaseModel):
    currentPlan: str
    status: str
    nextBillingDate: str
    amount: str
