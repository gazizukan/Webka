# Generated by Django 2.0.4 on 2018-04-19 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flowerstore', '0006_product_overallcount'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.CharField(default='http://itechstore.ru/assets/no_image-a7190a91be571a4d5f7ad93e6dc1c347.png', max_length=200),
        ),
    ]
