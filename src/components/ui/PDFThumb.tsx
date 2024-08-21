import { FileText } from 'lucide-react';

interface PDFThumbProps {
    text: string;
}

export const PDFThumb: React.FC<PDFThumbProps> = ({ text }) => {
    return (
        <div className='flex flex-colb group items-center justify-center relative rounded-md gap-3 w-12 h-12 bg-red-400' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={24} color='white' />
            <p className='absolute text-xs text-white w-auto top-[60px] px-2 py-1 rounded-md whitespace-nowrap bg-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{text}</p>
        </div>
    );
};