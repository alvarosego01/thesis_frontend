

export interface Modal_Base_I {
    status: boolean;
    title?: string;
    children?: React.ReactNode;
    onClose?: () => void;
}

export interface Modal_Feedback_I extends Modal_Base_I {
    title: string;
    text?: string;
    type?: 'info' | 'warning' | 'danger' | 'success';
    labelAccept?: string;
    labelCancel?: string;
    onAccept?: () => void;
}