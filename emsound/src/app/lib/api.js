const API_URL = process.env.WORDPRESS_API_URL || 'https://test-martinemson.local/wp-json/wp/v2';

export async function fetchAPI(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`, { next: { revalidate: 60 } });
  
  if (!res.ok) {
    console.error('API Error:', await res.text());
    throw new Error('Failed to fetch API');
  }

  return res.json();
}

