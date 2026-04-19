import { APIRequestContext, APIResponse, request } from '@playwright/test';

async function raisePaymentIssue(
  name: string,
  email: string,
  message: string,
  token: string,
) {
  const reqCtx: APIRequestContext = await request.newContext();

  const response: APIResponse = await reqCtx.post(
    'https://api.practicesoftwaretesting.com/messages',
    {
      data: {
        name,
        subject: 'payments',
        message,
        email,
      },
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  if (response.status() !== 200) {
    throw new Error(
      'payment related issue is not registred with the system, please try again after sometime',
    );
  }

  console.log(JSON.stringify(response.json()));
}

export default raisePaymentIssue;
