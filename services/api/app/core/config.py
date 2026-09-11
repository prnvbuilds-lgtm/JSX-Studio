import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "JXP Studio API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api"
    SECRET_KEY: str = os.getenv("WP_JWT_SECRET", "super_secret_jxp_jwt_key_for_dev_only_change_in_prod")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7 # 7 days
    
    # WordPress WPGraphQL
    WPGRAPHQL_ENDPOINT: str = os.getenv("WPGRAPHQL_ENDPOINT", "http://localhost:8080/graphql")
    
    # Stripe Billing Stub
    STRIPE_SECRET_KEY: str = os.getenv("STRIPE_SECRET_KEY", "sk_test_placeholder")
    
    # Database
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./jxp.db")

    class Config:
        case_sensitive = True

settings = Settings()
