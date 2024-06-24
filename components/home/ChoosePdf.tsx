import Image from 'next/image';
import React, { useState } from 'react'

interface Props {
  setPdfFiles: (files: File[]) => void;
  pdfFiles: File[];
}

const ChoosePdf = ({setPdfFiles, pdfFiles}: Props) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setPdfFiles(newFiles);
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const acceptedTypes = ['application/pdf']; 
      const validFiles = Array.from(files).filter((file: File) =>
        acceptedTypes.includes(file.type)
      );

      if (validFiles) {
        setPdfFiles(validFiles);
        console.log('selected file: ', { target: { files: [files[0]] } });
      } else {
        alert('Please drop only PDF files.');
      }
    }
  };

  return (
    <div 
      className={`h-[565px] max-w-[486px] mx-auto bg-brand-gray-100 rounded-[27px] w-full border-[3px] border-dashed py-5 px-2 ${
        isDragging || pdfFiles.length>0 ? 'border-blue-600' : 'border-brand-blue/65'
        }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center h-full text-center text-brand-black-100">
        <div className='flex flex-col items-center'>
          <Image src={'/upload.svg'} width={52} height={52} alt='' />
          <div className='text-2xl my-5 text-brand-gray'>
            <label htmlFor="filePdf" className="cursor-pointer text-brand-blue font-semibold mr1">
              Upload 
            </label>
            <span> your Proposal</span>
          </div>
          <div className='my-5 text-2xl text-brand-gray'>
            {!(pdfFiles.length > 0) && <p>Drag your files here</p>}
            <div className='flex flex-col'>
              {pdfFiles.length > 0 && pdfFiles.map((pdf,idx) => (
                <p key={idx}>{pdf.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <input
        id="filePdf"
        type="file"
        className="sr-only"
        accept=".pdf"
        onChange={handleChange}
      />
    </div>
  )
}

export default ChoosePdf