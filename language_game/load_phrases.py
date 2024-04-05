import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'language_game.settings')
import django
django.setup()

from words.utils import load_phrases_from_json

if __name__ == '__main__':
    json_file_path = os.path.join(os.path.dirname(__file__), 'words', 'phrases.json')
    load_phrases_from_json(json_file_path)