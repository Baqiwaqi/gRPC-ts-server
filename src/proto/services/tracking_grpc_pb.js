// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_tracking_pb = require('../services/tracking_pb.js');

function serialize_flighttrackingservice_FlightTrackingRequest(arg) {
  if (!(arg instanceof services_tracking_pb.FlightTrackingRequest)) {
    throw new Error('Expected argument of type flighttrackingservice.FlightTrackingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flighttrackingservice_FlightTrackingRequest(buffer_arg) {
  return services_tracking_pb.FlightTrackingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flighttrackingservice_FlightTrackingResponse(arg) {
  if (!(arg instanceof services_tracking_pb.FlightTrackingResponse)) {
    throw new Error('Expected argument of type flighttrackingservice.FlightTrackingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flighttrackingservice_FlightTrackingResponse(buffer_arg) {
  return services_tracking_pb.FlightTrackingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FlightTrackingServiceService = exports.FlightTrackingServiceService = {
  getFlight: {
    path: '/flighttrackingservice.FlightTrackingService/GetFlight',
    requestStream: false,
    responseStream: false,
    requestType: services_tracking_pb.FlightTrackingRequest,
    responseType: services_tracking_pb.FlightTrackingResponse,
    requestSerialize: serialize_flighttrackingservice_FlightTrackingRequest,
    requestDeserialize: deserialize_flighttrackingservice_FlightTrackingRequest,
    responseSerialize: serialize_flighttrackingservice_FlightTrackingResponse,
    responseDeserialize: deserialize_flighttrackingservice_FlightTrackingResponse,
  },
};

exports.FlightTrackingServiceClient = grpc.makeGenericClientConstructor(FlightTrackingServiceService);
