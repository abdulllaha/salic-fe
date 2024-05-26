export const Routes = {
  LAYOUT: 'salic',
  USERS: 'users'
};

export const Endpoints = {
  USERS: 'http://localhost:3000/api/user',
  PHOTO: (email: string) => `http://localhost:3000/api/photo?email=${email}`
}