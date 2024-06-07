

interface setLineBorders_Props_I {
    line?: {
        top?: boolean;
        bottom?: boolean;
    }
}

export const setLineBorders = ({
    ...props
}: setLineBorders_Props_I): string => {

    if (!props.line) return '';

    let line: string = 'border-slate-200 dark:border-slate-600';
    if (props?.line?.top) {
        line = `border-t border-slate-200 dark:border-slate-600 pt-1 mt-2`;
    }
    if (props?.line?.bottom) {
        line = `${line} border-b border-slate-200 dark:border-slate-600 pb-1 mb-2`;
    }

    return line ;
}
