/* eslint-disable */
export default {
  addLocalStore(key,data) {
    localStorage.setItem(key,data);
  },
  getLocalStore(key) {
    return localStorage.getItem(key);
  },
  removeLocal(key) {
    localStorage.removeItem(key);
  },
  clearLocal() {
    localStorage.clear();
  },
  addSessionStore(key,data) {
    sessionStorage.setItem(key,data);
  },
  getSessionStore(key) {
    sessionStorage.getItem(key);
  },
  removeSession(key) {
    sessionStorage.removeItem(key);
  },
  clearSession() {
    sessionStorage.clear();
  }
}
