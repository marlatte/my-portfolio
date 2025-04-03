import { Metadata } from 'next';
import ComingSoon from '../../components/ui/coming-soon';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Contact() {
  return <ComingSoon pageName="Contact" />;
}
