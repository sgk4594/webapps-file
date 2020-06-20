import { AnchorSpec } from "../factory/anchor-factory";
import { PaintStyle } from "../styles";
import { OverlaySpec } from "../overlay/overlay";
import { ComponentOptions } from "../component/component";
import { ConnectorSpec } from "../connector/abstract-connector";
import { Connection } from "../connector/connection-impl";
export declare type EndpointId = "Rectangle" | "Dot" | "Blank" | UserDefinedEndpointId;
export declare type UserDefinedEndpointId = string;
export declare type EndpointParams = any;
export declare type EndpointSpec = EndpointId | [EndpointId, EndpointParams];
export interface EndpointOptions extends ComponentOptions {
    anchor?: AnchorSpec;
    anchors?: [AnchorSpec, AnchorSpec];
    endpoint?: EndpointSpec;
    enabled?: boolean;
    paintStyle?: PaintStyle;
    hoverPaintStyle?: PaintStyle;
    cssClass?: string;
    hoverClass?: string;
    maxConnections?: number;
    connectorStyle?: PaintStyle;
    connectorHoverStyle?: PaintStyle;
    connector?: ConnectorSpec;
    connectorOverlays?: Array<OverlaySpec>;
    connectorClass?: string;
    connectorHoverClass?: string;
    connectionsDetachable?: boolean;
    isSource?: boolean;
    isTarget?: boolean;
    reattach?: boolean;
    parameters?: object;
    data?: any;
    isTemporarySource?: boolean;
    connectionType?: string;
    dragProxy?: string | Array<string>;
    id?: string;
    scope?: string;
    reattachConnections?: boolean;
    type?: string;
    connectorTooltip?: string;
    uuid?: string;
    source?: string | any;
    connections?: Array<Connection>;
    "connector-pointer-events"?: string;
    detachable?: boolean;
    dragAllowedWhenFull?: boolean;
    onMaxConnections?: Function;
    connectionCost?: number;
    connectionsDirected?: boolean;
    deleteOnEmpty?: boolean;
    elementId?: string;
    _transient?: boolean;
}
