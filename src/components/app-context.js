import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#fff',
    tnav_fore:  '#616161',
    tnav_back:  '#eeeeee',
    err_msg_fore: '#fff',
    err_msg_back: '#ff5722',
    thead: 'w3-theme-d1',
  },
  dark: {
    foreground: '#dddddd',
    background: '#222222',
    tnav_fore:  '#bbbbbb',
    tnav_back:  '#222222',
    err_msg_fore: '#fff',
    err_msg_back: '#822e14',
    thead: 'w3-theme-d5',
    TableNavigationStyle: '',
  },
};

export const AppContext = React.createContext();