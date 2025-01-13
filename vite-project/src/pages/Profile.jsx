import { useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';
import NavBar from "../components/NavBar";
import styles from './Profile.module.css'; 

function Profile({ setSession }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <h1 className={styles.heading}>Profile</h1>
      <p className={styles.message}>Welcome to your profile!</p>
      <button className={styles.button} onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
