import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import { Container, Content, Profile } from './styles';

import logo from '../../assets/logo-purple.svg';

export default function Header() {
  const profile = useSelector((state) =>
    state.user ? state.user.profile : null
  );

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile ? profile.name : ''}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile && profile.avatar
                  ? profile.avatar.url
                  : 'https://cdn2.vectorstock.com/i/thumb-large/95/21/profile-placeholder-default-avatar-girl-vector-23489521.jpg'
              }
              alt={profile ? profile.name : ''}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
