/* eslint-disable react-memo/require-usememo */
/* eslint-disable object-curly-spacing */
import {Send} from 'lucide-react';
import {useState} from 'react';
import toast from 'react-hot-toast';
import {useMutation} from 'react-query';

interface EmailData {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}
// eslint-disable-next-line react-memo/require-memo
const ContactForm = () => {
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
  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';
  // Return the form component
  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSubmit}>
      <input
        className={inputClasses}
        name="name"
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        required
        type="text"
        value={name}
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
        type="email"
        value={email}
      />
      <input
        autoComplete="tel"
        className={inputClasses}
        name="phone"
        onChange={e => setPhoneNum(e.target.value)}
        placeholder="Phone Number"
        required
        type="tel"
        value={phoneNumber}
      />
      <input
        autoComplete="off"
        className={inputClasses}
        name="subject"
        onChange={e => setSubject(e.target.value)}
        placeholder="Subject"
        required
        type="text"
        value={subject}
      />
      <textarea
        className={inputClasses}
        maxLength={500}
        name="message"
        onChange={e => setMessage(e.target.value)}
        placeholder="Message"
        required
        rows={7}
        type="text"
        value={message}
      />
      <button
        aria-label="Submit contact form"
        className="flex w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message <Send className="ml-2" />
      </button>
    </form>
  );
};

export default ContactForm;
