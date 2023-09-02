import React from 'react';

interface ErrorProps {
  message: string;
}

function ErrorMessage({ message }: ErrorProps) {
  return (
    <div>
      <h2 className='text-primary'>"Error"</h2>
      <p className='text-primary'>{message}</p>
    </div>
  );
}

export default ErrorMessage;
