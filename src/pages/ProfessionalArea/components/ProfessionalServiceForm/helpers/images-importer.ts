export const importAllImages = (imageContexts:__WebpackModuleApi.RequireContext) => {
    const imagesDir:{[key: string]:string} = {};
    imageContexts.keys().map((item) => imagesDir[item.replace('./', '')] = imageContexts(item).default);
    return imagesDir;
};
