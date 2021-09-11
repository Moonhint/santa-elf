const locale = {
    en: {
        imagesUpload: {
            title: 'Upload Service',
            description: '*Image Format .jpg .jpeg .png. Maximum 3MB',
        },
        serviceInfo: {
            title: 'Service Information',
            require: '*required',
            name: {
                title: 'Sevice Name',
                subtitle: 'Name min. 5 chars',
                placeholder: 'Input service name',
                rules: {
                    required: 'service name is required',
                    max: 'maximum 120 chars',
                }
            },
            description: {
                title: 'Service Description',
                subtitle: 'Description max. 100 chars',
                placeholder: 'Input service description',
                rules: {
                    required: 'description is required',
                    max: 'maximum 1000 chars'
                }
            },
            price: {
                title: 'Price',
                placeholder: 'Input price',
                rules: {
                    required: 'price is required',
                }
            },
            guarantee: {
                title: 'Guarantee',
                subtitle: 'If the service have any guarantee.',
                placeholder: 'Tell about guarantee scope',
                rules: {
                    max:  'maximum 1000 chars',
                }
            }
        },
        upload: 'Upload',
    },
    id: {
        imagesUpload: {
            title: 'Upload Jasa',
            description: '*Format gambar .jpg .jpeg .png. Maximum 3MB',
        },
        serviceInfo: {
            title: 'Informasi Jasa',
            require: '*wajib',
            name: {
                title: 'Nama Jasa',
                subtitle: 'Nama min. 5 karakter',
                placeholder: 'Masukkan nama jasa',
                rules: {
                    required: 'nama jasa wajib diisi',
                    max: 'maksimum 120 karakter',
                }
            },
            description: {
                title: 'Deskripsi Jasa',
                subtitle: 'Deskripsi max. 1000 karakter',
                placeholder: 'Masukkan deskripsi jasa',
                rules: {
                    required: 'deskripsi jasa wajib diisi',
                    max: 'maksimum 1000 karakter'
                }
            },
            price: {
                title: 'Harga',
                placeholder: 'Masukkan harga',
                rules: {
                    required: 'harga wajib diisi',
                }
            },
            guarantee: {
                title: 'Garansi',
                subtitle: 'Jika jasa ini memiliki garansi.',
                placeholder: 'Ceritakan cakupan garansi',
                rules: {
                    max:  'masimum 1000 karakter',
                }
            }
        },
        upload: 'Upload',
    }
}

export default locale;
