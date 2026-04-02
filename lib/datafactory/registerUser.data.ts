import { APIRequestContext, APIResponse, request } from '@playwright/test';

export default async function registerNewUser(
  email: string = '',
  password: string = '',
): Promise<void> {
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
        email: email + user,
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
  if (!response.ok())
    throw new Error(
      'user creation is failed please try again after sometime 🙏',
    );

  // If no error printing the new User name and password
  console.log(
    `new user created successfully, with the userName : ${email + user} and password : ${password}`,
  );
}
