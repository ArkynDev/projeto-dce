import { FileText, X } from 'lucide-react';

interface PDFThumbProps {
    text: string;
    onClick: () => void;
}

export const PDFThumb: React.FC<PDFThumbProps> = ({ text, onClick }) => {
    return (
        <div className='cursor-pointer flex flex-colb group items-center justify-center relative rounded-md gap-3 w-12 h-12 bg-red-400' style={{ display: 'flex', alignItems: 'center', gap: '10px' }} onClick={onClick}>
            <FileText size={24} color='white' className=' group-hover:hidden' />
            <X size={24} color='white' className='hidden group-hover:flex' />
            <p className='absolute text-xs text-white w-auto top-[60px] px-2 py-1 rounded-md whitespace-nowrap bg-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{text}</p>
        </div>
    );
};