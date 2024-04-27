/* eslint-disable react-memo/require-usememo */
/* eslint-disable object-curly-spacing */
import {Send} from 'lucide-react';
import {useState} from 'react';
import toast from 'react-hot-toast';
import {useMutation} from 'react-query';
import {useMediaQuery} from 'react-responsive';

interface EmailData {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}
// eslint-disable-next-line react-memo/require-memo
const ContactForm = () => {
  // Set query client
  const isMobile = useMediaQuery({maxWidth: 768});
  const fontSize = isMobile ? 'large' : 'x-large';
  const fieldSize = isMobile ? '250px' : '400px';

  // Set states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNum] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const mutation = useMutation(
    (newEmail: EmailData) =>
      fetch('/api/send_enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmail),
      }),
    {
      onSuccess: () => {
        toast.success('Your enquiry is sent successfully');
      },
      onError: () => {
        console.error('Error adding collection');
        toast.error('Error sending your enquiry');
      },
    },
  );
  // Handle form submit
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Confirm with user then add collection and clear the form
    const userConfirmed = window.confirm('Do you want to send your message and contact details to us?');
    if (userConfirmed) {
      mutation.mutate({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        subject: subject,
        message: message,
      });
      // Clear the form
      setName('');
      setEmail('');
      setPhoneNum('');
      setSubject('');
      setMessage('');
    }
  };
  // Return the form component
  return (
    <div className="flex flex-col items-center justify-center w-screen max-w-full text-center bg-black mx-10">
      <form onSubmit={handleSubmit}>
        <table className="items-center">
          <tbody>
            <tr>
              <td
                style={{
                  textAlign: 'left',
                  color: '#F8C983',
                  fontSize: fontSize,
                  zIndex: 1,
                }}>
                <label>Name:</label>
              </td>
              <td>
                <input
                  onChange={e => setName(e.target.value)}
                  required
                  style={{
                    width: fieldSize,
                    padding: '4px',
                    borderRadius: '10px',
                  }}
                  type="text"
                  value={name}
                />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: 'left',
                  color: '#F8C983',
                  fontSize: fontSize,
                  zIndex: 1,
                }}>
                <label>Email:</label>
              </td>
              <td>
                <input
                  onChange={e => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '4px',
                    borderRadius: '10px',
                  }}
                  type="email"
                  value={email}
                />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: 'left',
                  color: '#F8C983',
                  fontSize: fontSize,
                  zIndex: 1,
                }}>
                <label>Phone:</label>
              </td>
              <td>
                <input
                  onChange={e => setPhoneNum(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '4px',
                    borderRadius: '10px',
                  }}
                  type="text"
                  value={phoneNumber}
                />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: 'left',
                  color: '#F8C983',
                  fontSize: fontSize,
                  zIndex: 1,
                }}>
                <label>Subject:</label>
              </td>
              <td>
                <input
                  onChange={e => setSubject(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '4px',
                    borderRadius: '10px',
                  }}
                  type="text"
                  value={subject}
                />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: 'left',
                  color: '#F8C983',
                  fontSize: fontSize,
                  zIndex: 1,
                }}>
                <label>Message:</label>
              </td>
              <td>
                <textarea
                  onChange={e => setMessage(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    minHeight: '200px',
                    padding: '4px',
                    borderRadius: '10px',
                  }}
                  value={message}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button
                  aria-label="Submit contact form"
                  className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
                  type="submit">
                  Send Message <Send />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ContactForm;
