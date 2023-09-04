import React from 'react';

interface ErrorProps {
  message: string;
}

function ErrorMessage({ message }: ErrorProps) {
  return (
    <div>
      <h2 className='text-primary text-2xl'>Error:</h2>
      <p className='text-primary text-4xl'>{message}</p>
    </div>
  );
}

export default ErrorMessage;
