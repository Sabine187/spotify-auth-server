export default async function handler(req, res) {
  const { code, code_verifier, redirect_uri } = req.body;

  const params = new URLSearchParams();
  params.append("client_id", "9fb9db7417034d34971b1defb719cdc8");
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", redirect_uri);
  params.append("code_verifier", code_verifier);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params
  });

  const data = await result.json();
  res.status(200).json(data);
}
