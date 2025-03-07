import React from 'react';
import Landing from '@/components/landing';
import AboutMe from '@/components/aboutme';

const HomePage: React.FC = () => {
  return (
    <main>
      <Landing />
      <AboutMe />
    </main>
  );
};

export default HomePage;