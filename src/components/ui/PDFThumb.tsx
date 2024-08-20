import { FileText } from 'lucide-react';

interface PDFThumbProps {
    text: string;
}

export const PDFThumb: React.FC<PDFThumbProps> = ({ text }) => {
    return (
        <div className='flex flex-col items-center justify-center relative rounded-md w-12 h-12 bg-red-400' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={24} color='white' />
            <p className='absolute text-xs text-white w-auto top-[20px] bg-red-400'>{text}</p>
        </div>
    );
};