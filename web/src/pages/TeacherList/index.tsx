import React, { useState, FormEvent } from 'react';

import PageHeader from '../../componenets/PageHeader';
import TeacherItem, { Teacher } from '../../componenets/TeacherItem';
import Input from '../../componenets/Input';
import Select from '../../componenets/Select';

import api from '../../services/api';

import './styles.css';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setTeachers(response.data);
    
  }

  return (
    <div id="page-teacher-list" className="container">
    <PageHeader title="Voici les proffys disponibles.">
      <form id="search-teachers" onSubmit={searchTeachers}>
        <Select
          name="subject"
          label="Sujet"
          value={subject}
          onChange={e => { setSubject(e.target.value) }}
          options={[
            { value: 'Arts', label: 'Arts' },
            { value: 'Biologie', label: 'Biologie' },
            { value: 'Sciences', label: 'Sciences' },
            { value: 'Education physique', label: 'Education physique' },
            { value: 'Physique', label: 'Physique' },
            { value: 'Geographie', label: 'Geographie' },
            { value: 'Histoire', label: 'Histoire' },
            { value: 'Matémathiques', label: 'Matémathiques' },
            { value: 'Français', label: 'Français' },
            { value: 'Chimie', label: 'Chimie' },
          ]}
        />
        <Select
          name="week_day"
          label="Jour de la semaine"
          value={week_day}
          onChange={e => { setWeekDay(e.target.value) }}
          options={[
            { value: '0', label: 'Dimanche' },
            { value: '1', label: 'Lundi' },
            { value: '2', label: 'Mardi' },
            { value: '3', label: 'Mercredi' },
            { value: '4', label: 'Jeudi' },
            { value: '5', label: 'Vendredi' },
            { value: '6', label: 'Samedi' },
          ]}
        />
        <Input
          type="time"
          name="time"
          label="Hora"
          value={time}
          onChange={e => { setTime(e.target.value) }}
        />

        <button type="submit">
          Buscar
        </button>
      </form>
    </PageHeader>

    <main>
      {teachers.map((teacher: Teacher) => {
        return <TeacherItem key={teacher.id} teacher={teacher} />;
      })}
    </main>
    </div>
  );
}

export default TeacherList;