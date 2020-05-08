export class districtwise
{
    state:string;
    district:string;
    confirmed:number;
    active:number;
    recovered:number;
    deceased:number;
    
    newconfirmed:number;
    newdeceased:number;
    newrecovered:number;
    
    constructor(state,district,confirmed,active,recovered,deceased,newconfirmed,newdeceased,newrecovered)
    {
        this.state=state;
        this.district=district;
        this.active=active;
        this.confirmed=confirmed;
        this.recovered=recovered;
        this.deceased=deceased;
        this.newconfirmed=newconfirmed;
        this.newdeceased=newdeceased;
        this.newrecovered=newrecovered;

    }
}
