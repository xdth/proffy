import React from 'react';

import PageHeader from '../../componenets/PageHeader';
import TeacherItem from '../../componenets/TeacherItem';
import Input from '../../componenets/Input';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
    <PageHeader title="Voici les proffys disponibles.">
      <form id="search-teachers">
        <Input name="subject" label="Sujet" />
        <Input name="week_day" label="Jour de la semaine" />
        <Input type="time" name="time" label="Horaire" />
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