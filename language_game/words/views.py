from django.shortcuts import render
from .models import Phrase
import random

def phrases_view(request):
    if request.method == 'POST':
        # Handle user's question mutation and logic
        user_question = request.POST.get('question')
        phrase = Phrase.objects.filter(question__iexact=user_question).first()

        if phrase:
            message = f"The answer is: {phrase.answer}"
        else:
            message = "Sorry, I couldn't find the answer to your question."

        context = {
            'message': message
        }
        return render(request, 'words/phrases.html', context)

    context = {
        'message': ''
    }
    return render(request, 'words/phrases.html', context)