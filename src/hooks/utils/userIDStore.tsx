let userIDs = '';
let listeners: any[] = [];

export const userIDsStore = {
  addUserIDs(id: string) {
    userIDs = id;
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return userIDs;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
