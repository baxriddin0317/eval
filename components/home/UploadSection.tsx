'use client'
import React, { useState } from 'react'
import ChooseRFP from './ChooseRFP';
import ChoosePdf from './ChoosePdf';

const UploadSection = () => {
  const [RFPFile, setRFPFile] = useState<File | null>(null);
  const [pdfFiles, setPdfFiles] = useState<File[]>([]); // Define type for pdfFile

  return (
    <div className="grid md:grid-cols-2 w-full items-center gap-8">
      <ChooseRFP rfpFile={RFPFile} setRFPFile={setRFPFile} />
      <ChoosePdf pdfFiles={pdfFiles} setPdfFiles={setPdfFiles} />
    </div>
  )
}

export default UploadSection