export class UnitPayload {
    id: number;
    code: string;
    name: string;

    isEmpty(){
        if(this.code || this.name){
            return false;
        }
        return true;
    }
}