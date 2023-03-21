import React, { useState } from 'react';
import GameImg from '../components/GameImgList';
import Gamebulle from '../components/GameNavBar';

const GamebullePage = () => {
    const [selectedPlatform, setSelectedPlatform] = useState(null);

    return (
        <>
            <Gamebulle isAdmin={true} selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} />
            <GameImg isAdmin={true} selectedPlatform={selectedPlatform} />
        </>
    );
};

export default GamebullePage;
