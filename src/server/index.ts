import { Server, ServerCredentials, ServerUnaryCall, sendUnaryData, handleUnaryCall } from '@grpc/grpc-js';
import { Service } from 'protobufjs';
import { IFlightTrackingServer, FlightTrackingService } from '../proto/services/tracking_grpc_pb';
import { FlightRequest, Flight } from '../proto/services/tracking_pb';

const server = new Server();
const allFlights: Flight.AsObject[] = [
  {
    flightId: '1',
    flightNumber: 'AA123',
    airlineName: 'KLM',
    departureAirport: 'AMS',
    arrivalAirport: 'BCN',
  },
  {
    flightId: '2',
    flightNumber: 'BB123',
    airlineName: 'RYANAIR',
    departureAirport: 'AMS',
    arrivalAirport: 'LON',
  },
  {
    flightId: '3',
    flightNumber: 'CC123',
    airlineName: 'RYANAIR',
    departureAirport: 'AMS',
    arrivalAirport: 'LON',
  }
];

function getFlight(
  call: ServerUnaryCall<FlightRequest, Flight>,
  callback: sendUnaryData<Flight>): void {
  const request = call.request;
  const flight = allFlights.filter((d) => d.flightId === request.getFlightId()).shift();
  const response = new Flight();
  if (flight !== undefined) {
    response.setFlightId(flight.flightId);
    response.setFlightNumber(flight.flightNumber);
    response.setAirlineName(flight.airlineName);
    response.setDepartureAirport(flight.departureAirport);
    response.setArrivalAirport(flight.arrivalAirport);
  }
  callback(null, response);
}

server.addService(FlightTrackingService, { getFlight });

server.bindAsync('0.0.0.0:4000', ServerCredentials.createInsecure(), () => {
  server.start();

  console.log('server is running on 0.0.0.0:4000');
});
