export class Portfolio {

    constructor(public security:string, public ISIN:string, public position:number,public closePrice:number,public livePrice:number,public value:number,public pnl:number) { }
}