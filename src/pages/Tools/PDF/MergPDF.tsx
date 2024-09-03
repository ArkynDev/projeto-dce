import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { PDFThumb } from '../../../components/ui/PDFThumb';
import './style.css';

export const MergPDF: React.FC = () => {
    const [pdfFiles, setPdfFiles] = useState<File[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Filtra apenas arquivos PDF
        const pdfs = acceptedFiles.filter(file => file.type === 'application/pdf');
        setPdfFiles(prevFiles => [...prevFiles, ...pdfs]);
    }, []);

    const removeFile = (index: number) => {
        setPdfFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'application/pdf' // Aceita apenas arquivos PDF
    });
    
    return(
        <section className="w-screen h-screen">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div 
                    {...getRootProps()}
                    className='rounded-md border-dashed border-[2px] border-gray-500 p-20 text-center w-1/2'
                >
                    <input {...getInputProps()} />
                    <p>
                        Solte arquivos PDF aqui<br />
                        ou clique para escolher os arquivos
                    </p>
                </div>
                <div className="mt-4 text-center">
                    <div className='flex gap-3 flex-wrap'>
                        {pdfFiles.map((file, index) => (
                            <PDFThumb text={file.name} onClick={() => removeFile(index)} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};