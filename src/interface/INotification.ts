
export interface INotification {
    isNotificationShow: boolean,
    color: string,
    message: string
}

export interface IConfirmDialog {
    dialog: boolean,
    message: string,
    title: string,
    resolve: any,
    reject: any,
    dialogOptions: {
        color: string,
        width: number,
        noconfirm: boolean,
    },
}