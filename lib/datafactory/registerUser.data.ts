import { APIRequestContext, APIResponse, request } from '@playwright/test';

async function registerNewUser(
  email: string = '',
  password: string = '',
): Promise<{ [name: string]: string }> {
  // Creating context to perform api calls
  const reqCtx: APIRequestContext = await request.newContext();

  const user: string = 'User' + new Date().getMilliseconds();

  // Making POST api call and getting response from it.
  const response: APIResponse = await reqCtx.post(
    'https://practicesoftwaretesting.com/auth/register',
    {
      data: {
        first_name: user,
        last_name: 'C',
        dob: '1997-03-24',
        phone: '0000000000',
        email: user + email,
        password: password,
        address: {
          street: 'Kondapur',
          city: 'Hyderabad',
          state: 'Telangana',
          country: 'IN',
          postal_code: '500084',
        },
      },
    },
  );

  // validating the response is 200 - 299 or failed
  if (!response.ok()) {
    console.error(response.body());
    throw new Error(
      'user creation is failed please try again after sometime 🙏',
    );
  }

  // If no error printing the new User name and password
  console.log(
    `new user created successfully, with the userName : ${user + email} and password : ${password}`,
  );

  return {
    email: user + email,
    password,
  };
}

export default registerNewUser;
