import React, { useState } from 'react';
import GameImg from '../components/GameImgList';
import GamebulleAdmin from '../components/GameNavBarAdmin';

const AdminPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  return (
    <>
      <GamebulleAdmin isAdmin={true} selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} />
      <GameImg isAdmin={true} selectedPlatform={selectedPlatform} />
    </>
  );
};

export default AdminPage;
