import json
from .models import Phrase

def load_phrases_from_json(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)

    for phrase_data in data['phrases']:
        question = phrase_data['question']
        answer = phrase_data['answer']
        language = phrase_data['language']
        Phrase.objects.create(
            question=question,
            answer=answer,
            language=language
        )