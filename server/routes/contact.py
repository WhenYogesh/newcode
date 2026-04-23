import secrets
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import Contact
from ..schemas import ContactCreate, ContactResponse, ContactOut

router = APIRouter(prefix="/api", tags=["contact"])
security = HTTPBasic()

ADMIN_PASSWORD = "luminara_admin_2025"
ADMIN_USERNAME = "admin"


def verify_admin(credentials: HTTPBasicCredentials = Depends(security)):
    correct_user = secrets.compare_digest(credentials.username, ADMIN_USERNAME)
    correct_pass = secrets.compare_digest(credentials.password, ADMIN_PASSWORD)
    if not (correct_user and correct_pass):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
            headers={"WWW-Authenticate": "Basic"},
        )


@router.post("/contact", response_model=ContactResponse)
def create_contact(data: ContactCreate, db: Session = Depends(get_db)):
    contact = Contact(
        name=data.name,
        email=data.email,
        phone=data.phone,
        business_name=data.business_name,
        selected_plan=data.selected_plan,
        message=data.message,
    )
    db.add(contact)
    db.commit()
    db.refresh(contact)
    return ContactResponse(success=True, message="Form submitted successfully")


@router.get("/contacts", response_model=List[ContactOut], dependencies=[Depends(verify_admin)])
def list_contacts(db: Session = Depends(get_db)):
    return db.query(Contact).order_by(Contact.submitted_at.desc()).all()
