from django.db import models

class Phrase(models.Model):
    question = models.TextField()
    answer = models.CharField(max_length=100)
    language = models.CharField(max_length=50)

    def __str__(self):
        return self.question