
---

```markdown
# 🚀 AI-Powered Resume Reviewer & Job Matcher

This project is a full-stack web application that uses advanced AI (Groq + LLaMA 3-70B) to:
- 📄 Extract skills and insights from resumes
- 🧠 Improve resumes for impact and clarity
- 🎯 Match resumes to relevant job descriptions

Built with **FastAPI** (Python) for the backend and **React.js** for the frontend.

---

## ✨ Features

- ✅ Upload your resume (PDF, DOCX, or TXT)
- ✅ AI-powered skill extraction
- ✅ Resume improvement using Groq’s LLaMA 3-70B
- ✅ Job matching based on resume content
- ✅ Clean, interactive user interface (React)
- ✅ Downloadable improvement results

---

## 🧠 AI Model Used

This project uses the [Groq API](https://console.groq.com) to access the blazing fast **LLaMA 3 70B** model.

---

## 📁 Project Structure

```

resume-ai-app/
│
├── backend/
│   ├── main.py                # FastAPI backend routes
│   ├── resume\_parser.py       # Text extraction logic
│   ├── resume\_improver.py     # Resume enhancement via Groq
│   ├── job\_matcher.py         # Rule-based job matching
│   └── .env                   # API key (GROQ\_API\_KEY)
│
└── frontend/
├── src/
│   └── App.js             # React component
├── public/
└── package.json           # React config

````

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/resume-ai-app.git
cd resume-ai-app
````

---

### 2. Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Run the FastAPI server:

```bash
uvicorn main:app --reload
```

---

### 3. Frontend Setup (React)

```bash
cd ../frontend
npm install
npm start
```

Frontend will run on `http://localhost:3000`.

---

## 🧪 Usage

1. Visit `http://localhost:3000`.
2. Choose a task: `Extract Skills`, `Improve Resume`, or `Match Jobs`.
3. Upload your resume file.
4. View results in the panel and download them.

---

## 📥 Supported File Types

* `.pdf`
* `.docx`
* `.txt`

---

## 📦 Requirements

### Backend:

* `fastapi`
* `uvicorn`
* `groq`
* `python-dotenv`
* `PyMuPDF` / `python-docx`

### Frontend:

* React 18+
* Fetch API (native)

---

## 🔒 Security Notes

* CORS enabled only for `localhost:3000`
* `.env` is used to securely store your Groq API key
* Downloadable result output is sanitized to prevent injection

---

## 💡 Future Features

* ✅ Resume section-wise analysis (Education, Experience, etc.)
* 🔍 Integration with LinkedIn or Indeed for real job scraping
* 📊 Recruiter dashboard to manage multiple candidates
* 🔐 User login & resume history
* 🌍 Docker & EC2 deployment

---

## 📸 Screenshots

<p align="center">
  <img src="screenshots/upload.png" width="400" />
  <img src="screenshots/results.png" width="400" />
</p>

---

## 🙋‍♀️ Author

**Januki Manage**
AI Engineer | Resume Analyzer Builder
[GitHub](https://github.com/Januki0330)

---

## ⭐ Show Your Support

If you like this project:

* Star ⭐ the repo
* Share it with friends
* Contribute enhancements!

---

## 📄 License

This project is licensed under the MIT License.

```

---

Would you like me to:
- Auto-generate `requirements.txt`?
- Generate screenshots for README?
- Create the project logo/banner?

Let me know!
```
