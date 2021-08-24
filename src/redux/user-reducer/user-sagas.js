import { takeLatest, call, put, all } from '@redux-saga/core/effects';

import {
  EMAIL_SIGN_IN_PENDING,
  GOOGLE_SIGN_IN_PENDING,
  CHECK_USER_SESSION,
  SIGN_OUT_PENDING,
} from './user-constants';

import {
  signInFullFiled,
  signInRejected,
  signOutFullfiled,
  signOutRejected,
} from './user-actions';

import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapShot = yield userRef.get();
    yield put(signInFullFiled({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInRejected(error.message));
  }
}

export function* onGoogleSignInPending() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInRejected(error.message));
  }
}

export function* onEmailSignInPending({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInRejected(error.message));
  }
}

export function* onIsUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInRejected(error.message));
  }
}

export function* onSignOut() {
  try {
    yield auth.signOut();
    yield put(signOutFullfiled());
  } catch (error) {
    yield put(signOutRejected(error.message));
  }
}

export function* pendingGoogleSignInSagas() {
  yield takeLatest(GOOGLE_SIGN_IN_PENDING, onGoogleSignInPending);
}

export function* pendingEmailSignInSagas() {
  yield takeLatest(EMAIL_SIGN_IN_PENDING, onEmailSignInPending);
}

export function* checkUserSessionSagas() {
  yield takeLatest(CHECK_USER_SESSION, onIsUserAuthenticated);
}

export function* signOutPendingSagas() {
  yield takeLatest(SIGN_OUT_PENDING, onSignOut);
}

export function* userSagas() {
  yield all([
    call(pendingGoogleSignInSagas),
    call(pendingEmailSignInSagas),
    call(checkUserSessionSagas),
    call(signOutPendingSagas),
  ]);
}
