/** @jsxImportSource @emotion/react */
import { LOCALE_KEY } from './const';
import { useTranslation } from 'react-i18next';
import { Upload, Modal } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface.d';
import { FileAddOutlined } from '@ant-design/icons';
import { ImagePreviewModalType, OnUploadChangeProps } from './type';
import ImgCrop from 'antd-img-crop';
import style from './style';

interface PropsType {
    images: UploadFile[] | undefined,
    mainImages: UploadFile[] | undefined,
    secondImages: UploadFile[] | undefined,
    thirdImages: UploadFile[] | undefined,
    forthImages: UploadFile[] | undefined,
    fifthImages: UploadFile[] | undefined,
    preview: ImagePreviewModalType;
    uploaderInfo: {
        url: string;
        headers: {
            Authorization: string;
        };
    },
    onUploaderPreview: (file:UploadFile) => void;
    onImageUploaderChange: ({ fileList }:OnUploadChangeProps, subject: string) => void;
    onCancelPreview: () =>  void;
}
const ServiceImageUploaderPageView = (props:PropsType) => {
    const { t } = useTranslation(LOCALE_KEY);

    const { 
        // images, 
        mainImages, 
        secondImages,
        thirdImages,
        forthImages,
        fifthImages,
        preview, 
        uploaderInfo, 
        onUploaderPreview, 
        onImageUploaderChange, 
        onCancelPreview 
    } = props;

    const uploadButton = (number: number | undefined) => (
        <div>
            <FileAddOutlined />
            { number ? <div style={{ marginTop: 8 }}>{`${t('image')} ${number}`}</div> : <div style={{ marginTop: 8 }}>{t('image')}</div> }
        </div>
    );

    const renderUploadButton = (contextImage: UploadFile[] | undefined, number?: number) => {
        if (!contextImage){
            return null;
        }else{
            return contextImage.length >= 1 ? null : uploadButton(number);
        }
    }

    return (
        <div css={style.base}>
            <div css={style.mainUploader}>
                <ImgCrop rotate>
                    <Upload
                        action={uploaderInfo.url}
                        headers={uploaderInfo.headers}
                        listType="picture-card"
                        fileList={mainImages}
                        onPreview={onUploaderPreview}
                        onChange={(e) => onImageUploaderChange(e, 'main')}
                        maxCount={1}
                        >
                        {renderUploadButton(mainImages)}
                    </Upload>
                </ImgCrop>
                <h4 className="ribbon">{t('image_main')}</h4>
            </div>
            <div css={style.uploader}>
                <ImgCrop rotate>
                    <Upload
                        action={uploaderInfo.url}
                        headers={uploaderInfo.headers}
                        listType="picture-card"
                        fileList={secondImages}
                        onPreview={onUploaderPreview}
                        onChange={(e) => onImageUploaderChange(e, 'second')}
                        maxCount={1}
                        >
                        {renderUploadButton(secondImages, 2)}
                    </Upload>
                </ImgCrop>
            </div>
            <div css={style.uploader}>
                <ImgCrop rotate>
                    <Upload
                        action={uploaderInfo.url}
                        headers={uploaderInfo.headers}
                        listType="picture-card"
                        fileList={thirdImages}
                        onPreview={onUploaderPreview}
                        onChange={(e) => onImageUploaderChange(e, 'third')}
                        maxCount={1}
                        >
                        {renderUploadButton(thirdImages, 3)}
                    </Upload>
                </ImgCrop>
            </div>
            <div css={style.uploader}>
                <ImgCrop rotate>
                    <Upload
                        action={uploaderInfo.url}
                        headers={uploaderInfo.headers}
                        listType="picture-card"
                        fileList={forthImages}
                        onPreview={onUploaderPreview}
                        onChange={(e) => onImageUploaderChange(e, 'forth')}
                        maxCount={1}
                        >
                        {renderUploadButton(forthImages, 4)}
                    </Upload>
                </ImgCrop>
            </div>
            <div css={style.uploader}>
                <ImgCrop rotate>
                    <Upload
                        action={uploaderInfo.url}
                        headers={uploaderInfo.headers}
                        listType="picture-card"
                        fileList={fifthImages}
                        onPreview={onUploaderPreview}
                        onChange={(e) => onImageUploaderChange(e, 'fifth')}
                        maxCount={1}
                        >
                        {renderUploadButton(fifthImages, 5)}
                    </Upload>
                </ImgCrop>
            </div>
            <Modal
                visible={preview.visible}
                title={preview.title}
                footer={null}
                onCancel={onCancelPreview}
                >
                <img alt="example" style={{ width: '100%' }} src={preview.imageUrl} />
            </Modal>
        </div>
    )
}

export default ServiceImageUploaderPageView;