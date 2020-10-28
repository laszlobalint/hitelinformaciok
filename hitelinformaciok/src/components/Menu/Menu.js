import React, { useState, useEffect } from 'react';
import ReactMegaMenu from 'react-mega-menu';

import classes from './Menu.module.css';

const Menu = (props) => {
  const { type } = props;

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    if (type && type === 'residental')
      setMenuItems([
        {
          label: 'Magánszemélyek',
          key: 'residental',
          items: (
            <ul className={classes.Items}>
              <li>Lakáshitel</li>
              <li>Hitelkiváltás</li>
              <li>Szabadfelhasználás</li>
              <li>Személyi kölcsön</li>
              <li>NOK</li>
              <li>LTP</li>
            </ul>
          ),
        },
      ]);

    if (type && type === 'business')
      setMenuItems([
        {
          label: 'Mikro- és kisvállalkozások',
          key: 'small-business',
          items: (
            <ul className={classes.Items}>
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
            <ul className={classes.Items}>
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
            <ul className={classes.Items}>
              <li>Biztosítási tanácsadás</li>
              <li>Pályázati tanácsadás</li>
              <li>Befektetési tanácsadás</li>
            </ul>
          ),
        },
      ]);
  }, [type]);

  return (
    <ReactMegaMenu
      styleConfig={{
        menuProps: {
          className: [classes.Menu, classes.MenuTop].join(' '),
        },
        contentProps: {
          className: [classes.Content, classes.MenuTop].join(' '),
        },
        menuItemProps: {
          className: [classes.Item, classes.MenuTop].join(' '),
        },
        menuItemSelectedProps: {
          className: [classes.Selected, classes.MenuTop].join(' '),
        },
        containerProps: {
          className: [classes.Container, classes.MenuTop].join(' '),
        },
      }}
      data={menuItems}
    />
  );
};

export default Menu;
