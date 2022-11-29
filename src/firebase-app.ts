import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

if (process.env.NODE_ENV == 'production') {
  initializeApp({ credential: applicationDefault() });
} else {
  initializeApp();
}

export { getAuth };
