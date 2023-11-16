# Generated by Django 4.2.7 on 2023-11-16 01:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=60)),
                ('apellidos', models.CharField(max_length=60)),
                ('direccion', models.CharField(max_length=60)),
            ],
            options={
                'verbose_name': 'cliente',
                'verbose_name_plural': 'clientes',
                'db_table': 'clientes',
            },
        ),
        migrations.CreateModel(
            name='Telefono',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero', models.CharField(max_length=12)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='clientes.cliente')),
            ],
        ),
    ]