export default async function handler(req, res) {
  const { address } = req.query;
  if (!address) {
    return res.status(400).json({ error: "缺少地址参数" });
  }

  try {
    const response = await fetch(`https://claim.renzoprotocol.com/api/eligibility-checker/${address}`);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json(data);
  } catch (error) {
    console.error("代理请求失败:", error);
    return res.status(500).json({ error: "代理失败" });
  }
}
