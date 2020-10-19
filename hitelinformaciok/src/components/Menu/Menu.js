import React from 'react';
import ReactMegaMenu from 'react-mega-menu';

import classes from './Menu.module.css';

const Menu = (props) => {
  const MENU_ITEMS = [
    {
      label: 'Magánszemélyek',
      key: 'residental',
      items: (
        <ul>
          <li>Lakáshitel</li>
          <li>Hitelkiváltás</li>
          <li>Szabadfelhasználás</li>
          <li>Személyi kölcsön</li>
          <li>NOK</li>
          <li>LTP</li>
        </ul>
      ),
    },
    {
      label: 'Mikro- és kisvállalkozások',
      key: 'small-business',
      items: (
        <ul>
          <li>Jelzálogalapú hitel</li>
          <li>Folyószámlahitel</li>
          <li>Forgóeszközhitel</li>
          <li>Lízing</li>
          <li>Faktoring</li>
          <li>Beruházási hitel</li>
          <li>Bankgarancia</li>
          <li>Lombardhitel</li>
        </ul>
      ),
    },
    {
      label: 'Közép- és nagyvállalatok',
      key: 'large-business',
      items: (
        <ul>
          <li>Jelzálogalapú hitel</li>
          <li>Folyószámlahitel</li>
          <li>Forgóeszközhitel</li>
          <li>Lízing</li>
          <li>Faktoring</li>
          <li>Bankgarancia</li>
          <li>Beruházási hitel</li>
          <li>Lombardhitel</li>
          <li>Projekthitel</li>
        </ul>
      ),
    },
    {
      label: 'Egyéb szolgáltatások',
      key: 'other-services',
      items: (
        <ul>
          <li>Biztosítási tanácsadás</li>
          <li>Pályázati tanácsadás</li>
          <li>Befektetési tanácsadás</li>
        </ul>
      ),
    },
  ];
  return (
    <ReactMegaMenu
      styleConfig={{
        menuProps: {
          className: [classes.Menu, classes.MenuTop, 'row'].join(' '),
        },
        contentProps: {
          className: [classes.Content, classes.MenuTop, 'row'].join(' '),
        },
        menuItemProps: {
          className: [classes.Item, classes.MenuTop, 'row'].join(' '),
        },
        menuItemSelectedProps: {
          className: [classes.Selected, classes.MenuTop, 'row'].join(' '),
        },
        containerProps: {
          className: [classes.Container, classes.MenuTop, 'row'].join(' '),
        },
      }}
      data={MENU_ITEMS}
    />
  );
};

export default Menu;
