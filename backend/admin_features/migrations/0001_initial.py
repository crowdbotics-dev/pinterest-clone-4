# Generated by Django 3.2.24 on 2024-03-13 00:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('pins', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Analytics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('active_users', models.IntegerField()),
                ('pins_created', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='ContentModeration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action_taken', models.CharField(max_length=255)),
                ('reason', models.TextField()),
                ('moderated_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='contentmoderation_moderated_by', to=settings.AUTH_USER_MODEL)),
                ('pin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='contentmoderation_pin', to='pins.pin')),
            ],
        ),
    ]
