

export const getAssetPath = (fileName: string): string => {
    const baseUrl = import.meta.url; // Obtiene la URL del archivo actual
    const basePath = baseUrl.substring(0, baseUrl.lastIndexOf('/')); // Elimina el nombre del archivo para obtener la base
    return `${basePath}/../../assets/${fileName}`;
};