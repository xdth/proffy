import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import './styles.css'

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }
  return (
      <article className="teacher-item">
        <header>
          <img src={teacher.avatar} alt="xdth"/>
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>

        <p>{teacher.bio}</p>

        <footer>
          <p>
            Pris/heure
          <strong>€ {teacher.cost}</strong>
          </p>
          <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} target="_blank" >
            <img src={whatsappIcon} alt="Whatsapp"/>
            Whatsapp
          </a>
        </footer>
      </article>
  );
}

export default TeacherItem;