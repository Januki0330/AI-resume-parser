import os
import tempfile
import docx2txt
from pdfminer.high_level import extract_text

def extract_resume_text(upload_file):
    suffix = os.path.splitext(upload_file.filename)[1]
    with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
        tmp.write(upload_file.file.read())
        tmp_path = tmp.name

    try:
        if suffix == ".pdf":
            text = extract_text(tmp_path)
        elif suffix == ".docx":
            text = docx2txt.process(tmp_path)
        else:
            text = "Unsupported file format"
    finally:
        os.remove(tmp_path)

    return text
