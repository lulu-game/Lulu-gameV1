# game/load_utils.py
import json
from .models import Question


def load_questions_from_json(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)

    for question_data in data['interactive_questions']:
        question = question_data['question']
        correct_answer = question_data['correct_answer']
        language = question_data['language']
        Question.objects.create(
            question=question,
            correct_answer=correct_answer,
            language=language
        )