from django.db import models

class Question(models.Model):
    question = models.CharField(max_length=200)
    correct_answer = models.CharField(max_length=100)
    language = models.CharField(max_length=50)

    def __str__(self):
        return self.question
