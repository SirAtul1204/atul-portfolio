'use client';
import { useState } from 'react';
import { Button } from '@qevryn/ui';
import { Check, Copy, Printer } from 'lucide-react';
export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState('');
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(email);
            setStatus('Email copied');
          } catch {
            setStatus('Could not copy. Select the email link instead.');
          }
        }}
      >
        {status === 'Email copied' ? <Check size={15} /> : <Copy size={15} />}{' '}
        Copy email
      </Button>
      <span className="sr-only" role="status">
        {status}
      </span>
    </>
  );
}
export function PrintResume() {
  return (
    <Button onClick={() => window.print()}>
      <Printer size={16} /> Print / save PDF
    </Button>
  );
}
