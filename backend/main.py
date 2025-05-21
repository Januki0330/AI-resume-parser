from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from resume_parser import extract_resume_text
from resume_improver import improve_resume
from job_matcher import match_resume_with_jobs

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/extract_skills")
async def extract_skills(resume: UploadFile = File(...)):
    text = extract_resume_text(resume)
    # (for now) just return raw text
    return {"type": "skills", "result": text[:1000]}

@app.post("/improve_resume")
async def improve(resume: UploadFile = File(...)):
    text = extract_resume_text(resume)
    improved = improve_resume(text)
    return {"type": "improvement", "result": improved}

@app.post("/match_jobs")
async def match_jobs(resume: UploadFile = File(...)):
    text = extract_resume_text(resume)
    job_descriptions = [
        "We are hiring a software engineer with Python and ML experience.",
        "Looking for a data analyst skilled in SQL and Tableau.",
        "Frontend developer needed with React and CSS skills."
    ]
    matches = match_resume_with_jobs(text, job_descriptions)
    return {"type": "matches", "result": matches}
