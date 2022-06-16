// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_tracking_pb = require('../services/tracking_pb.js');

function serialize_flightTracking_Flight(arg) {
  if (!(arg instanceof services_tracking_pb.Flight)) {
    throw new Error('Expected argument of type flightTracking.Flight');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flightTracking_Flight(buffer_arg) {
  return services_tracking_pb.Flight.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flightTracking_FlightRequest(arg) {
  if (!(arg instanceof services_tracking_pb.FlightRequest)) {
    throw new Error('Expected argument of type flightTracking.FlightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flightTracking_FlightRequest(buffer_arg) {
  return services_tracking_pb.FlightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var FlightTrackingService = exports.FlightTrackingService = {
  getFlight: {
    path: '/flightTracking.FlightTracking/GetFlight',
    requestStream: false,
    responseStream: false,
    requestType: services_tracking_pb.FlightRequest,
    responseType: services_tracking_pb.Flight,
    requestSerialize: serialize_flightTracking_FlightRequest,
    requestDeserialize: deserialize_flightTracking_FlightRequest,
    responseSerialize: serialize_flightTracking_Flight,
    responseDeserialize: deserialize_flightTracking_Flight,
  },
};

exports.FlightTrackingClient = grpc.makeGenericClientConstructor(FlightTrackingService);
