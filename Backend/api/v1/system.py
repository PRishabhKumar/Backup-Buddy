from fastapi import APIRouter
from core.hardware_detection import get_drives


router = APIRouter()

@router.get("/system/detect_drives")
async def fetch_drives():
    drives = get_drives()
    return{
        "count": len(drives),
        "drives": drives
    }