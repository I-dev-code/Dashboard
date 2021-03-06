import {environment} from '../../environments/environment';

export class SettingsContainer {
    get paramsInfo(): any {
        return this._paramsInfo;
    }

    set paramsInfo(value: any) {
        this._paramsInfo = value;
    }
    get deletable(): boolean {
        return this._deletable;
    }

    set deletable(value: boolean) {
        this._deletable = value;
    }

    set id(value: string) {
        this._id = value;
    }

    get id(): string {
        return this._id;
    }

    set state(value: string) {
        this._state = value;
    }

    get state(): string {
        return this._state;
    }

    get connected(): boolean {
        return this._connected;
    }

    set connected(value: boolean) {
        this._connected = value;
    }

    get params(): any {
        return this._params;
    }

    get infos(): any {
        return this._infos;
    }

    private _deletable = false;
    private _connected = false;

    private _id = '';
    private _state = 'connection';
    private _params: any;
    private _infos: any;
    private _paramsInfo: any;

    constructor(params: any = null, infos: any = null, paramsInfo: any = null) {
        const commonParams = {timer: 0, grid: {
            cols: environment.gridOptions.defaultItemCols, rows: environment.gridOptions.defaultItemRows,
            y: 0, x: 0}};
        this._params = {...commonParams, ...params};
        this._infos = infos;
        this._paramsInfo = paramsInfo;
    }

    set params(value: any) {
        this._params = value;
    }

    set infos(value: any) {
        this._infos = value;
    }

    addVariable(variable: any) {
        this._params.push(variable);
    }
}