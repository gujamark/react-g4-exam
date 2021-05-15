import SignInForm from '../../forms/SignIn';
import styles from './SignInPage.module.css';

function SignInPage() {
  return (
    <div className={styles.SignInPageWrapper}>
      <SignInForm />
    </div>
  );
}

export default SignInPage;
