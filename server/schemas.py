from datetime import datetime
from pydantic import BaseModel, EmailStr, field_validator


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    business_name: str
    selected_plan: str
    message: str

    @field_validator("name", "phone", "business_name", "message")
    @classmethod
    def not_empty(cls, v: str, info) -> str:
        if not v or not v.strip():
            raise ValueError(f"{info.field_name} is required")
        return v.strip()

    @field_validator("selected_plan")
    @classmethod
    def valid_plan(cls, v: str) -> str:
        if v not in ("starter", "growth", "custom"):
            raise ValueError("Plan must be starter, growth, or custom")
        return v


class ContactResponse(BaseModel):
    success: bool
    message: str


class ContactOut(BaseModel):
    id: int
    name: str
    email: str
    phone: str
    business_name: str
    selected_plan: str
    message: str
    submitted_at: datetime
    status: str

    class Config:
        from_attributes = True
