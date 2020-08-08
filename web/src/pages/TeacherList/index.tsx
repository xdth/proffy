import React from 'react';

import PageHeader from '../../componenets/PageHeader';
import TeacherItem from '../../componenets/TeacherItem';
import Select from '../../componenets/Select'

import './styles.css';;

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
    <PageHeader title="Voici les proffys disponibles.">
      <form id="search-teachers">
        <Select
          name="subject"
          label="Sujet"
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
        <Select
          name="subject"
          label="Sujet"
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
      </form>
    </PageHeader>

    <main>
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </main>
    </div>
  );
}

export default TeacherList;