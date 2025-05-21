import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def improve_resume(text):
    prompt = f"Improve this resume for clarity and impact:\n\n{text[:3000]}"

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",  # Groq-supported model
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
    )

    return response.choices[0].message.content
