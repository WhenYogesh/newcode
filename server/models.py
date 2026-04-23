from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime
from .database import Base


class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    business_name = Column(String, nullable=False)
    selected_plan = Column(String, nullable=False)  # "starter" | "growth" | "custom"
    message = Column(String, nullable=False)
    submitted_at = Column(DateTime, default=datetime.utcnow)
    status = Column(String, default="new")  # "new" | "contacted" | "closed"
