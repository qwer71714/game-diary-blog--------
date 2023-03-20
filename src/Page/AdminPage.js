import GameImg from '../components/GameImgList';
import GamebulleAdmin from '../components/GameNavBarAdmin';

const AdminPage = () => {
  return (
    <>
      <GamebulleAdmin isAdmin={true} />
      <GameImg isAdmin={true} />
    </>
  );
};

export default AdminPage;