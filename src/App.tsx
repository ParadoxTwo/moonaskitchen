import { type ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationApp from './composites/NavigationApp';
import Home from './pages/Home';
import About from './pages/About';
import Order from './pages/Order';
import Contact from './pages/Contact';
import styled from 'styled-components';
import { currentTheme } from './theme';

export default function (): ReactNode {
  const pages = [
    { href: '/', component: Home, name: 'Home' },
    { href: '/order', component: Order, name: 'Order' },
    { href: '/about', component: About, name: 'About' },
    { href: '/contact', component: Contact, name: 'Contact' },
  ];

  return (
    <App data-testid="app">
      <Router>
        <NavigationApp data-testid="nav" pages={pages} />
      </Router>
    </App>
  );
}

const App = styled.div`
  background-color: ${currentTheme.color.background};
`;
