export class Sales {
    salesRep:string;
    date:string;
    client:string;
    primaryContact:string;
    title:string;
    vertical:string;
    meetingLocation:string;
    purpose:string;
    outcomeRemarks:string;
    status:string;
}
export class SalesNumber {
    salesRep: string;
    mmr:number;
    logos:number;
    calls:number
}

export class SalesStatus {
    leadIn: number;
    contactMade: number;
    needsDefine: number;
    negotiationStarted: number;
    proposalMade: number;
    won: number;

}