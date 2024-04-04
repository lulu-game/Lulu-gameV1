from django.shortcuts import render, redirect
from .models import Question
import random


def game_view(request):
    if request.method == 'POST':
        # Handle user's answer mutation
        user_answer = request.POST.get('answer')
        question_id = request.POST.get('question_id')
        stop_game = request.POST.get('stop_game')

        if stop_game:
            # Stop the game and show the score
            score = request.session.get('score', 0)
            context = {
                'score': score,
            }
            return render(request, 'game/score.html', context)

        question = Question.objects.get(id=question_id)

        if user_answer.lower() == question.correct_answer.lower():
            # Correct answer
            score = request.session.get('score', 0) + 1
            request.session['score'] = score
            message = 'Correct! Your score is {}'.format(score)
        else:
            # Incorrect answer mutation
            score = request.session.get('score', 0)
            message = "Sorry, that was not correct. The correct answer is '{}'. Your score is {}".format(question.correct_answer, score)

        request.session['message'] = message

    # Get a random question to ask user
    question = random.choice(Question.objects.all())

    context = {
        'question': question,
        'message': request.session.get('message', '')
    }

    return render(request, 'game/game.html', context)