import emailjs from '@emailjs/browser';

export const sendEmail = async (emailData: any) => {
  let response = false;
  await emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE || '',
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE || '',
      emailData,
      process.env.NEXT_PUBLIC_PUBLIC_ID || ''
    )
    .then(
      (result) => {
        response = true;
      },
      (error) => {
        console.log(error.text);
        response = false;
      }
    );
  return response;
};
