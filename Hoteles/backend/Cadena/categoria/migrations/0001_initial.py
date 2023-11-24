# Generated by Django 4.2.7 on 2023-11-23 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='categoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nivel', models.CharField(max_length=8)),
                ('iva', models.CharField(max_length=80)),
                ('descripcion', models.CharField(max_length=80)),
            ],
            options={
                'db_table': 'Categoria',
            },
        ),
    ]
