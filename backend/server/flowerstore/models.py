from django.db import models

# Create your models here.


class Flower(models.Model):
    name = models.CharField(max_length=20, blank=True)
    price = models.FloatField(default=0.0)
    image = models.CharField(
        max_length=200, default="http://deifiori.kz/upload/images/big/64894_207905_10.jpg")

    def __str__(self):
        return self.name 


