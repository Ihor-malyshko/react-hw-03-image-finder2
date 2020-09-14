import React from 'react';

export default function Button({ getMore }) {
  return (
    <button type="button" className="Button" onClick={getMore}>
      Load more
    </button>
  );
}
