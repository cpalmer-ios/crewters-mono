let image = '';
let listeners: any[] = [];

export const imageStore = {
  addImage(id: string) {
    image = id;
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return image;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
