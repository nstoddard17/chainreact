
export default async function handler(req, res) {
  const baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  const queryParams = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID!,
    redirect_uri: 'https://chainreact.app/api/integrations/google',
    response_type: 'code',
    scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/spreadsheets',
    access_type: 'offline',
    prompt: 'consent'
  });

  res.redirect(`${baseUrl}?${queryParams}`);
}
