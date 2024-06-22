import Image from 'next/image';
import React, { useState } from 'react'

interface Props {
  setRFPFile: (item:File|null) => void,
  rfpFile: File | null
}

const ChooseRFP = ({setRFPFile, rfpFile}: Props) => {

  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setRFPFile(file);
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
      const acceptedTypes = ['application/rfp']; // Specify accepted file types (XLS and XLSX)
      const isValidFileType = Array.from(files).every((file: File) => {
        const fileType = file.type;
        return acceptedTypes.includes(fileType);
      });

      if (isValidFileType) {
        setRFPFile(files[0]);
      } else {
        alert('Please drop only RFP files.');
      }
    }
  };

  return (
    <div 
      className={`h-[565px]  bg-transparent rounded-[27px] w-full border-[3px] border-dashed py-5 px-2 ${
        isDragging || rfpFile ? 'border-blue-600' : 'border-brand-blue'
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
            <label htmlFor="fileRFP" className="cursor-pointer text-brand-blue font-semibold mr1">
              Upload 
            </label>
            <span> your RFP</span>
          </div>
          <div className='my-5 text-2xl text-brand-gray'>
            {!rfpFile && <p>Drag your files here</p>}
            {rfpFile && <p >
              {rfpFile.name}
            </p>}
          </div>
        </div>
      </div>
      <input
        id="fileRFP"
        type="file"
        className="sr-only"
        accept=".rfp"
        onChange={handleChange}
      />
    </div>
  )
}

export default ChooseRFP