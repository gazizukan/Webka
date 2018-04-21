# Generated by Django 2.0.4 on 2018-04-18 21:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flowerstore', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=20)),
                ('price', models.FloatField(default=0.0)),
            ],
        ),
    ]