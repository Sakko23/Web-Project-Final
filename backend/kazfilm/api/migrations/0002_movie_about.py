# Generated by Django 2.0.4 on 2018-04-20 13:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='about',
            field=models.CharField(default='', max_length=200),
        ),
    ]