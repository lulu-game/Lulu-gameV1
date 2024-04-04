import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'language_game.settings')
import django
django.setup()

from game.load_utils import load_questions_from_json

if __name__ == '__main__':
    json_file_path = os.path.join(os.path.dirname(__file__), 'qa.json')
    load_questions_from_json(json_file_path)