from django.db import models


class Player(models.Model):
    name = models.CharField(max_lenght=250)
    lastname = models.CharField(max_lenght=250)
    birthdate = models.DateField()
    hight = models.DecimalField()
    nationality = models.CharField(max_lenght=250)
    position = models.CharField(max_lenght=250)
    team = models.ForeignKey()


class Team(models.Model):
    name = models.CharField(max_length=250)
    city = models.CharField(max_length=250)
    country = models.CharField(max_length=250)
    year = models.IntegerField()


class League(models.Model):
    name = models.CharField(max_length=250)
    country = models.CharField(max_length=250)


class matches(models.Model):
    localteam = models.CharField(max_length=250)
    visitorteam = models.CharField(max_length=250)
    localteamgoals = models.IntegerField()
    visitorteam = models.IntegerField()
    winner = models.CharField(max_length=250)
    looser = models.CharField(max_length=250)