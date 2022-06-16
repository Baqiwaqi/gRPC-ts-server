// package: flighttrackingservice
// file: services/tracking.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FlightTrackingRequest extends jspb.Message { 
    getFlightId(): string;
    setFlightId(value: string): FlightTrackingRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightTrackingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FlightTrackingRequest): FlightTrackingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightTrackingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightTrackingRequest;
    static deserializeBinaryFromReader(message: FlightTrackingRequest, reader: jspb.BinaryReader): FlightTrackingRequest;
}

export namespace FlightTrackingRequest {
    export type AsObject = {
        flightId: string,
    }
}

export class FlightTrackingResponse extends jspb.Message { 
    getFlightId(): string;
    setFlightId(value: string): FlightTrackingResponse;

    getFlightStatus(): string;
    setFlightStatus(value: string): FlightTrackingResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightTrackingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FlightTrackingResponse): FlightTrackingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightTrackingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightTrackingResponse;
    static deserializeBinaryFromReader(message: FlightTrackingResponse, reader: jspb.BinaryReader): FlightTrackingResponse;
}

export namespace FlightTrackingResponse {
    export type AsObject = {
        flightId: string,
        flightStatus: string,
    }
}
