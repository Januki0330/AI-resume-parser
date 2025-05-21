from sentence_transformers import SentenceTransformer, util

model = SentenceTransformer('all-MiniLM-L6-v2')

def match_resume_with_jobs(resume_text, job_descriptions):
    resume_embedding = model.encode(resume_text, convert_to_tensor=True)
    results = []
    for jd in job_descriptions:
        jd_embedding = model.encode(jd, convert_to_tensor=True)
        score = util.pytorch_cos_sim(resume_embedding, jd_embedding).item()
        results.append((jd, round(score, 2)))

    results.sort(key=lambda x: x[1], reverse=True)
    return results[:3]
