import React, { useState } from 'react';
import './App.css';
import { UserProfile } from './user_profile';
import { UserLinks } from './user_links';

function App() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
     
      <UserLinks />

      <UserProfile
        profession="QA Engineer"
        Internship={2}
        showProjects={showProjects}
        setShowProjects={setShowProjects}
      />
    </>
  );
}

export default App;