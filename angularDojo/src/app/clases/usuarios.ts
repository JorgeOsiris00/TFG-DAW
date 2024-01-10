
export type Role = 'españa' | 'chicago' | 'admin' | 'master';
export interface Usuarios{
    id: number,
    nombre: string,
    password:string,
    correo: string,
    rol:string,
    dojo: string,
}

export interface UserWithToken extends Usuarios {
    token: string;
  }