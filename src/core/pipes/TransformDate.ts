import { TempoHandler } from '@tesis-project/dev-globals/dist/core/classes'




export const Transform_dateShort = (date: Date): string => {

    if(!date) return '';

    const _TempoHandler = new TempoHandler();
    return _TempoHandler.date_short(date.toString());

}

export const Transform_dateComplete = (date: Date): string => {

    if(!date) return '';

    const _TempoHandler = new TempoHandler();
    return _TempoHandler.date_complete(date.toString());

}