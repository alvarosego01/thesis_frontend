

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { getAssetPath } from '../utils';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
    tuesday: {
        normal: getAssetPath('/fonts/TuesdayNight-Regular.ttf'),
        bold: getAssetPath('/fonts/TuesdayNight-Regular.ttf'),
        italics: getAssetPath('/fonts/TuesdayNight-Regular.ttf'),
        bolditalics: getAssetPath('/fonts/TuesdayNight-Regular.ttf'),
    },
    Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf'
    }
};

export const urltoFile = (url: string, filename: string, mimeType: string) => {

    let u: string = 'data:text/plain;base64,' + url;

    return (fetch(u)
        .then(function (res) { return res.arrayBuffer(); })
        .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
    );
}

export const generateContract_V1 = async (content: any = null) => {

    let fileDoc: any = null;

    console.log('content', content);

    if (content == null) {

        return;
    }

    const documentDefinition: any = {
        content: content.modelContract.content,
        styles: content.modelContract.styles,
        defaultStyle: content.modelContract.defaultStyle,
        watermark: content.modelContract.watermark,
    };


    return new Promise(async (resolve, reject) => {

        const pdfDoc: any = await pdfMake.createPdf(documentDefinition);

        await pdfDoc.getBase64(async (file: any) => {

            fileDoc = file;
            if (fileDoc != null) {

                // urltoFile
                let n = 'ctr-' + Date.now() + '.pdf';

                await urltoFile(fileDoc, n, 'application/pdf').then(r => {
                    fileDoc = r;
                })

                pdfDoc.open();

                resolve(true);


            } else {

                reject(false);

            }

        });

    });
}
