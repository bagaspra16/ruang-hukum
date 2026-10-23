import { redirect } from 'next/navigation';

// Redirect old /expert-content route to the new /lex-ai page
export default function ExpertContentRedirect() {
  redirect('/lex-ai');
}
