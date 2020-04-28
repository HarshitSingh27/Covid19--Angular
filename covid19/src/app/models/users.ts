export class statewise
{
    active:number;
    confirmed:number;
    deaths:number;
    lastupdatedtime:string;
    recovered:number;
    state:string;
    statecode:string;

    constructor(active,confirmed,deaths,lastupdatedtime,recovered,state,statecode)
    {
        this.active=active;
        this.confirmed=confirmed;
        this.deaths=deaths;
        this.recovered=recovered;
        this.lastupdatedtime=lastupdatedtime;
        this.state=state;
        this.statecode=statecode;
    }
}