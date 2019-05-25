import {EndpointRepresentation} from "../endpoint/endpoints";
import {Constructable, Dictionary, jsPlumbInstance} from "../core";
const endpointMap:Dictionary<Constructable<EndpointRepresentation<any, any>>> = {};

export const EndpointFactory = {
    get:(instance:jsPlumbInstance<any>, name:string, params:any):EndpointRepresentation<any, any> => {

        let e:Constructable<EndpointRepresentation<any, any>> = endpointMap[name];
        if (!e) {
            throw {message:"jsPlumb: unknown endpoint type '" + name + "'"};
        } else {
            return new e(instance, params) as EndpointRepresentation<any, any>;
        }
    },

    register:(name:string, ep:Constructable<EndpointRepresentation<any, any>>) => {
        endpointMap[name] = ep;
    }
};