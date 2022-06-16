// package: flightTracking
// file: services/tracking.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Flight extends jspb.Message { 
    getFlightId(): string;
    setFlightId(value: string): Flight;
    getFlightNumber(): string;
    setFlightNumber(value: string): Flight;
    getAirlineName(): string;
    setAirlineName(value: string): Flight;
    getDepartureAirport(): string;
    setDepartureAirport(value: string): Flight;
    getArrivalAirport(): string;
    setArrivalAirport(value: string): Flight;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Flight.AsObject;
    static toObject(includeInstance: boolean, msg: Flight): Flight.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Flight, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Flight;
    static deserializeBinaryFromReader(message: Flight, reader: jspb.BinaryReader): Flight;
}

export namespace Flight {
    export type AsObject = {
        flightId: string,
        flightNumber: string,
        airlineName: string,
        departureAirport: string,
        arrivalAirport: string,
    }
}

export class FlightRequest extends jspb.Message { 
    getFlightId(): string;
    setFlightId(value: string): FlightRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FlightRequest): FlightRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightRequest;
    static deserializeBinaryFromReader(message: FlightRequest, reader: jspb.BinaryReader): FlightRequest;
}

export namespace FlightRequest {
    export type AsObject = {
        flightId: string,
    }
}

export class FlightResponse extends jspb.Message { 

    hasFlight(): boolean;
    clearFlight(): void;
    getFlight(): Flight | undefined;
    setFlight(value?: Flight): FlightResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FlightResponse): FlightResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightResponse;
    static deserializeBinaryFromReader(message: FlightResponse, reader: jspb.BinaryReader): FlightResponse;
}

export namespace FlightResponse {
    export type AsObject = {
        flight?: Flight.AsObject,
    }
}
