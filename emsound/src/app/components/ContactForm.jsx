'use client';

import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import parse from 'html-react-parser';

const GET_CONTACT_FORM = gql`
  query GetContactForm {
    contactForm(id: "1", idType: DATABASE_ID) {
      title
      content
    }
  }
`;

export default function ContactForm() {
  const [formData, setFormData] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const { loading, error, data } = useQuery(GET_CONTACT_FORM);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className='w-full text-center py-12'>Error: {error.message}</p>;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would typically send the form data to your WordPress site
    // This is a placeholder for the actual submission logic
    console.log('Form data:', formData);
    setSubmissionStatus('success');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const formContent = parse(data.contactForm.content, {
    replace: (domNode) => {
      if (domNode.attribs && domNode.name === 'input') {
        return (
          <input
            {...domNode.attribs}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        );
      }
      if (domNode.attribs && domNode.name === 'textarea') {
        return (
          <textarea
            {...domNode.attribs}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        );
      }
      if (domNode.attribs && domNode.name === 'select') {
        return (
          <select
            {...domNode.attribs}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            {domNode.children.map((option, index) => (
              <option key={index} value={option.attribs.value}>
                {option.children[0].data}
              </option>
            ))}
          </select>
        );
      }
    }
  });

  return (
    <div className="h-screen w-full flex justify-center items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">{data.contactForm.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {formContent}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
      {submissionStatus === 'success' && (
        <p className="mt-4 text-green-600">Thank you for your submission!</p>
      )}
    </div>
  );
}
