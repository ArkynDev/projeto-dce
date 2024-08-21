import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { PDFThumb } from '../../../components/ui/PDFThumb';
import './style.css';

export const MergPDF: React.FC = () => {
    const [pdfFiles, setPdfFiles] = useState<File[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Filtra apenas arquivos PDF
        const pdfs = acceptedFiles.filter(file => file.type === 'application/pdf');
        setPdfFiles(prevFiles => [...prevFiles, ...pdfs]);
    }, []);

    const onDragEnd = (result: any) => {
        if (!result.destination) return;

        const reorderedFiles = Array.from(pdfFiles);
        const [movedItem] = reorderedFiles.splice(result.source.index, 1);
        reorderedFiles.splice(result.destination.index, 0, movedItem);

        setPdfFiles(reorderedFiles);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'application/pdf' // Aceita apenas arquivos PDF
    });
    
    return(
        <section className="w-screen h-screen">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div {...getRootProps()} className='rounded-md border-dashed border-[2px] border-gray-500 p-20 text-center w-1/2'>
                        <input {...getInputProps()} />
                        <p>Solte arquivos PDF aqui<br />
                        ou clique para escolher os arquivos</p>
                </div>
                <div className="mt-4 text-center">
                    <h2>Arquivos PDF carregados:</h2>
                    <DragDropContext onDragEnd={onDragEnd}> 
                        <Droppable droppableId="pdfFiles" direction="horizontal">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className='flex gap-3 flex-wrap'
                                >
                                    {pdfFiles.map((file, index) => (
                                        <Draggable key={file.name} draggableId={file.name} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <PDFThumb text={file.name} />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                </div>
                            )}
                        </Droppable>  
                    </DragDropContext>  
            </div>
            </div>
        </section>
    )
}