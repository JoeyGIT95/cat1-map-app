// /api/proxy.js
export default async function handler(req, res) {
  try {
    const response = await fetch('http://34.133.154.63:8000/cat1_status.json');
    if (!response.ok) {
      return res.status(500).json({ error: 'Failed to fetch from source' });
    }

    const data = await response.json();
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Proxy error', details: err.message });
  }
}
