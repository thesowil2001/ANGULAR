# Generated by Django 4.2.7 on 2023-11-23 15:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('agencias', '0001_initial'),
        ('personas', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='reservas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Fecha_De_Ingreso', models.DateField()),
                ('Fecha_De_Salida', models.DateField()),
                ('cedula', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='personas.personas')),
                ('nombre', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='agencias.agencias')),
            ],
            options={
                'db_table': 'Reservas',
            },
        ),
    ]