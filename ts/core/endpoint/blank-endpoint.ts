import {EndpointRepresentation, EndpointRepresentationParams} from "./endpoints"
import {Orientation} from "../factory/anchor-record-factory"
import {Endpoint} from "./endpoint"
import {AnchorPlacement} from "../router/router"

export type ComputedBlankEndpoint = [ number, number, number, number  ]

export interface BlankEndpointParams extends EndpointRepresentationParams {}

export class BlankEndpoint extends EndpointRepresentation<ComputedBlankEndpoint> {

    constructor(endpoint:Endpoint, params?:BlankEndpointParams) {
        super(endpoint, params)
    }

    getParams(): Record<string, any> {
        return {}
    }

    // TODO this compute method could be provided in the same way that the renderers do it - via a simple object containing functions..i think.
    // it would be much more lightweight as we'd not need to create a class for each one.
    _compute(anchorPoint:AnchorPlacement, orientation:Orientation, endpointStyle:any):ComputedBlankEndpoint {

        this.x = anchorPoint.curX
        this.y = anchorPoint.curY
        this.w = 10
        this.h = 0

        return [anchorPoint.curX, anchorPoint.curY, 10, 0]
    }

    static type = "Blank"
    type = BlankEndpoint.type
}



