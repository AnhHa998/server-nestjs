export class Tech6UserInfo {
    // tslint:disable-next-line:variable-name
    private _userName: string;
    public get userName(): string {
        return this._userName;
    }
    public set userName(value: string) {
        this._userName = value;
    }

    // tslint:disable-next-line:variable-name
    private _pwd: string;
    public get pwd(): string {
        // tslint:disable-next-line:no-unused-expression
        return this._pwd;
    }
    public set pwd(value: string) {
        this._pwd = value;
    }

    // tslint:disable-next-line:variable-name
    private _siteURL: string;
    public get siteURL(): string {
        return this._siteURL;
    }
    public set siteURL(value: string) {
        this._siteURL = value;
    }
}
