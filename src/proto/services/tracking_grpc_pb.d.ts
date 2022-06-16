// package: flighttrackingservice
// file: services/tracking.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as services_tracking_pb from "../services/tracking_pb";

interface IFlightTrackingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getFlight: IFlightTrackingServiceService_IGetFlight;
}

interface IFlightTrackingServiceService_IGetFlight extends grpc.MethodDefinition<services_tracking_pb.FlightTrackingRequest, services_tracking_pb.FlightTrackingResponse> {
    path: "/flighttrackingservice.FlightTrackingService/GetFlight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_tracking_pb.FlightTrackingRequest>;
    requestDeserialize: grpc.deserialize<services_tracking_pb.FlightTrackingRequest>;
    responseSerialize: grpc.serialize<services_tracking_pb.FlightTrackingResponse>;
    responseDeserialize: grpc.deserialize<services_tracking_pb.FlightTrackingResponse>;
}

export const FlightTrackingServiceService: IFlightTrackingServiceService;

export interface IFlightTrackingServiceServer {
    getFlight: grpc.handleUnaryCall<services_tracking_pb.FlightTrackingRequest, services_tracking_pb.FlightTrackingResponse>;
}

export interface IFlightTrackingServiceClient {
    getFlight(request: services_tracking_pb.FlightTrackingRequest, callback: (error: grpc.ServiceError | null, response: services_tracking_pb.FlightTrackingResponse) => void): grpc.ClientUnaryCall;
    getFlight(request: services_tracking_pb.FlightTrackingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_tracking_pb.FlightTrackingResponse) => void): grpc.ClientUnaryCall;
    getFlight(request: services_tracking_pb.FlightTrackingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_tracking_pb.FlightTrackingResponse) => void): grpc.ClientUnaryCall;
}

export class FlightTrackingServiceClient extends grpc.Client implements IFlightTrackingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getFlight(request: services_tracking_pb.FlightTrackingRequest, callback: (error: grpc.ServiceError | null, response: services_tracking_pb.FlightTrackingResponse) => void): grpc.ClientUnaryCall;
    public getFlight(request: services_tracking_pb.FlightTrackingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_tracking_pb.FlightTrackingResponse) => void): grpc.ClientUnaryCall;
    public getFlight(request: services_tracking_pb.FlightTrackingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_tracking_pb.FlightTrackingResponse) => void): grpc.ClientUnaryCall;
}
