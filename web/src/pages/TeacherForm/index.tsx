import React, { useState, FormEvent } from 'react';

import PageHeader from '../../componenets/PageHeader';
import Input from '../../componenets/Input'
import Textarea from '../../componenets/Textarea';
import Select from '../../componenets/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';

function TeacherForm() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {

    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);

    scheduleItems.push();
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value}
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
    
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Enregistré avec succès!')
    }).catch(() => {
      alert('Ooops, un problème est suvernu.')
    });
    
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Alors vous voulez offrir un cours ou une formation."
        description="Remplissez d'abord le formulaire d'inscription."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Vos données</legend>

            <Input
              name="name"
              label="Nom complet"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value) }}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value) }}
            />
            <Textarea
              name="bio"
              label="Biographie"
              value={bio}
              onChange={(e) => { setBio(e.target.value) }}
            />
          </fieldset>
          
          <fieldset>
            <legend>Au sujet des cours</legend>

            <Select
              name="subject"
              label="Sujet"
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}
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
            <Input
              name="cost"
              label="Le prix de votre cours par heure"
              value={cost}
              onChange={(e) => { setCost(e.target.value) }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horaires disponibles
              <button type="button" onClick={addNewScheduleItem}>
                + Nouveau horaire
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Jour de la semaine"
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                    name="from"
                    label="De"
                    type="time"
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input
                    name="to"
                    label="À"
                    type="time"
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>);
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Important" />
              Important! <br/>
              Remplissez tous les champs
            </p>
            <button type="submit">
              Enregistrer
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;