import React from 'react';

import PageHeader from '../../componenets/PageHeader';
import Input from '../../componenets/Input'
import Textarea from '../../componenets/Textarea';
import Select from '../../componenets/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
;

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Alors vous voulez offrir un cours ou une formation."
        description="Remplissez d'abord le formulaire d'inscription."
      />

      <main>
        <fieldset>
          <legend>Vos données</legend>

          <Input name="name" label="Nom complet" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biographie" />
        </fieldset>
        
        <fieldset>
          <legend>Au sujet des cours</legend>

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
          <Input name="cost" label="Prix" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Important" />
            Important! <br/>
            Remplissez tous les champs
          </p>
          <button type="button">
            Enregistrer
          </button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;