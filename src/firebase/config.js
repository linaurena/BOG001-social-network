// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAKStieh__fAZXlhgrYTE0pPO6Ouwzz-IE',
  authDomain: 'isometric-fa02a.firebaseapp.com',
  databaseURL: 'https://isometric-fa02a.firebaseio.com',
  projectId: 'isometric-fa02a',
  storageBucket: 'isometric-fa02a.appspot.com',
  messagingSenderId: '4543344863',
  appId: '1:4543344863:web:639418176af5cf8221396a',
  measurementId: 'G-0XSCXS49CF',
};
// Initialize Firebase
export default () => {
  firebase.initializeApp(firebaseConfig);
};
