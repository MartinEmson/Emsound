import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const data = await request.json()

    const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL
    const FORM_ID = process.env.NEXT_PUBLIC_CONTACT_FORM_7_ID

    if (!WP_URL || !FORM_ID) {
      throw new Error("WordPress URL or Form ID not configured")
    }

    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    const response = await fetch(`${WP_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`, {
      method: "POST",
      body: formData,
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || "Failed to submit to WordPress")
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: error.message || "Failed to submit form" }, { status: 500 })
  }
}