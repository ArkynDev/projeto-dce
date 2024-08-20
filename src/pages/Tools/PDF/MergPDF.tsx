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

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'application/pdf' // Aceita apenas arquivos PDF
    });
    
    return(
        <section className="w-screen h-screen">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div {...getRootProps()} className='rounded-md' style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some PDF files here, or click to select files</p>
                </div>
                <div className="mt-4 text-center">
                    <h2>Arquivos PDF carregados:</h2>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {pdfFiles.map((file, index) => (
                        <PDFThumb key={index} text={file.name} />
                    ))}
                </div>
            </div>
            </div>
        </section>
    )
}