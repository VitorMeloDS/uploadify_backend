export interface UserAuth {
  email: string;
  password: string;
}

export function isUserAuth(object: any): object is UserAuth {
  return (
    'email' in object &&
    !!object['email'] &&
    typeof object['email'] === 'string' &&
    'password' in object &&
    !!object['password'] &&
    typeof object['password'] === 'string'
  );
}
