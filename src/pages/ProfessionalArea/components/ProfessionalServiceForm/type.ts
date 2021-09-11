import { UploadFile } from 'antd/lib/upload/interface.d';

export interface ImagePreviewModalType {
    visible: boolean;
    imageUrl: string;
    title: string;
}

export interface OnUploadChangeProps {
    fileList: UploadFile[];
}