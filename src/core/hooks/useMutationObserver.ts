import { RefObject, useEffect } from "react";


interface UseMutationObserverParams<T> {
    refs: RefObject<T>[];
    callback: (mutations: MutationRecord[], index: number) => void;
    options?: MutationObserverInit;
}

export const useMutationObserver = <T = HTMLElement>({ refs, callback, options }: UseMutationObserverParams<T>) => {

    useEffect(() => {
        const observers = refs.map((ref, index) => {
            const target: any = ref.current;
            console.log('target', target);
            if (target) {
                const observer = new MutationObserver((mutations) => {
                    // Llama al callback con las mutaciones y el índice
                    callback(mutations, index);
                });
                observer.observe(target, options || {});
                console.log('observer', observer)
                return observer;
            }
            return null;
        });

        // Limpiar todos los observers cuando el componente se desmonte
        return () => {
            observers.forEach(observer => {
                if (observer) {
                    observer.disconnect();
                }
            });
        };
    }, [refs, callback, options]);
};