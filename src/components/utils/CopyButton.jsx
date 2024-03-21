import React, { useState } from 'react'

const CopyButton = () => {
    const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => setCopied(true)} className={copied ? "copy-btn-clicked poppins-semibold" : "copy-btn poppins-semibold"} type="button">{copied ? 'Copied' : 'Copy'}</button>
  )
}

export default CopyButton