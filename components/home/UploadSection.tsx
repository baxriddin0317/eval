'use client'
import React, { useState } from 'react'
import ChooseRFP from './ChooseRFP';

const UploadSection = () => {
  const [RFPFile, setRFPFile] = useState<File | null>(null);
  return (
    <div className="grid grid-cols-2 w-full items-center gap-8">
      <ChooseRFP rfpFile={RFPFile} setRFPFile={setRFPFile} />
    </div>
  )
}

export default UploadSection