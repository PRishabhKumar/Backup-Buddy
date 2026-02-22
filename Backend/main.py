from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.v1.system import router as system_router

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# global system API routes

app.include_router(system_router, prefix="/api/v1")