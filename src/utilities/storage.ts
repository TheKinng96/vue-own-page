const localStorage = window.localStorage;

export const storage = {
  get: (item: string) => {
    return JSON.parse(localStorage.getItem(item) as string);
  },

  set: (item: string, value: any) => {
    return localStorage.setItem(item, JSON.stringify(value));
  },

  remove: (item: string) => {
    return localStorage.removeItem(item);
  },
};
