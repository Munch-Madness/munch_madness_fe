import React from 'react';

interface ErrorProps {
  message: string;
}

function ErrorMessage({ message }: ErrorProps) {
  return (
    <div>
      <h2>"Error"</h2>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
