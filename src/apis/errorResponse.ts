export interface ErrorParamsType {
    errorStatus?:number, 
    errorMessage:string
}
export interface ErrorResponseType {
    status: number,
    message: string,
}
const constructErrorResponse = (params:ErrorParamsType):ErrorResponseType => {
    return {
        status: params.errorStatus || 400,
        message: params.errorMessage || ''
    }
}

export default constructErrorResponse;
