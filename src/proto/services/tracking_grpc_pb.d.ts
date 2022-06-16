// package: flightTracking
// file: services/tracking.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as services_tracking_pb from "../services/tracking_pb";

interface IFlightTrackingService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getFlight: IFlightTrackingService_IGetFlight;
}

interface IFlightTrackingService_IGetFlight extends grpc.MethodDefinition<services_tracking_pb.FlightRequest, services_tracking_pb.Flight> {
    path: "/flightTracking.FlightTracking/GetFlight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_tracking_pb.FlightRequest>;
    requestDeserialize: grpc.deserialize<services_tracking_pb.FlightRequest>;
    responseSerialize: grpc.serialize<services_tracking_pb.Flight>;
    responseDeserialize: grpc.deserialize<services_tracking_pb.Flight>;
}

export const FlightTrackingService: IFlightTrackingService;

export interface IFlightTrackingServer extends grpc.UntypedServiceImplementation {
    getFlight: grpc.handleUnaryCall<services_tracking_pb.FlightRequest, services_tracking_pb.Flight>;
}

export interface IFlightTrackingClient {
    getFlight(request: services_tracking_pb.FlightRequest, callback: (error: grpc.ServiceError | null, response: services_tracking_pb.Flight) => void): grpc.ClientUnaryCall;
    getFlight(request: services_tracking_pb.FlightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_tracking_pb.Flight) => void): grpc.ClientUnaryCall;
    getFlight(request: services_tracking_pb.FlightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_tracking_pb.Flight) => void): grpc.ClientUnaryCall;
}

export class FlightTrackingClient extends grpc.Client implements IFlightTrackingClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getFlight(request: services_tracking_pb.FlightRequest, callback: (error: grpc.ServiceError | null, response: services_tracking_pb.Flight) => void): grpc.ClientUnaryCall;
    public getFlight(request: services_tracking_pb.FlightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_tracking_pb.Flight) => void): grpc.ClientUnaryCall;
    public getFlight(request: services_tracking_pb.FlightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_tracking_pb.Flight) => void): grpc.ClientUnaryCall;
}
