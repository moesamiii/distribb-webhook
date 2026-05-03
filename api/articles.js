export default async function handler(req, res) {
  const response = await fetch(
    "https://ivjarnsrwjmnzltsqhyp.supabase.co/rest/v1/articles?select=*&order=created_at.desc",
    {
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2amFybnNyd2ptbnpsdHNocXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3OTI2MDksImV4cCI6MjA5MzM2ODYwOX0.s7_LWNT6X6xOWCowIDTz0rX-i7Lpp1UHRQHgl5dnI_U",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2amFybnNyd2ptbnpsdHNocXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3OTI2MDksImV4cCI6MjA5MzM2ODYwOX0.s7_LWNT6X6xOWCowIDTz0rX-i7Lpp1UHRQHgl5dnI_U",
      },
    }
  );
  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(data);
}
