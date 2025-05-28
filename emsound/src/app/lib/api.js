const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL

export async function fetchAPI(endpoint, options = {}) {
  const defaultOptions = {
    next: { revalidate: 60 }
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...defaultOptions,
    ...options
  });
  
  if (!res.ok) {
    console.error('API Error:', await res.text());
    throw new Error('Failed to fetch API');
  }

  return res.json();
}

export async function submitContactForm(formData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit form');
    }

    return {
      success: data.status === 'mail_sent',
      message: data.message,
      data
    };
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
}

export function isApiConfigured() {
  if (!API_URL) {
    console.error('WordPress API URL is not configured. Please set NEXT_PUBLIC_WORDPRESS_URL in your environment variables.');
    return false;
  }
  return true;
}