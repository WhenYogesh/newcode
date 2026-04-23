const BASE_URL = "https://newcode-gfa9.onrender.com";

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  selectedPlan: string;
  message: string;
}

export async function submitContact(data: ContactData) {
  const res = await fetch(`${BASE_URL}/contact/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      business_name: data.businessName,
      selected_plan: data.selectedPlan,
      message: data.message,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Submission failed' }));
    throw new Error(err.detail || 'Submission failed');
  }

  return res.json();
}