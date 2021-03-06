// source: services/tracking.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.flightTracking.Flight', null, global);
goog.exportSymbol('proto.flightTracking.FlightRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.flightTracking.Flight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flightTracking.Flight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flightTracking.Flight.displayName = 'proto.flightTracking.Flight';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.flightTracking.FlightRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flightTracking.FlightRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flightTracking.FlightRequest.displayName = 'proto.flightTracking.FlightRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.flightTracking.Flight.prototype.toObject = function(opt_includeInstance) {
  return proto.flightTracking.Flight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flightTracking.Flight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flightTracking.Flight.toObject = function(includeInstance, msg) {
  var f, obj = {
    flightId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    flightNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    airlineName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    departureAirport: jspb.Message.getFieldWithDefault(msg, 4, ""),
    arrivalAirport: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.flightTracking.Flight}
 */
proto.flightTracking.Flight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flightTracking.Flight;
  return proto.flightTracking.Flight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flightTracking.Flight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flightTracking.Flight}
 */
proto.flightTracking.Flight.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlightId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlightNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAirlineName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDepartureAirport(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setArrivalAirport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.flightTracking.Flight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flightTracking.Flight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flightTracking.Flight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flightTracking.Flight.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlightId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFlightNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAirlineName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDepartureAirport();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getArrivalAirport();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string flight_id = 1;
 * @return {string}
 */
proto.flightTracking.Flight.prototype.getFlightId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.flightTracking.Flight} returns this
 */
proto.flightTracking.Flight.prototype.setFlightId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string flight_number = 2;
 * @return {string}
 */
proto.flightTracking.Flight.prototype.getFlightNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.flightTracking.Flight} returns this
 */
proto.flightTracking.Flight.prototype.setFlightNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string airline_name = 3;
 * @return {string}
 */
proto.flightTracking.Flight.prototype.getAirlineName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.flightTracking.Flight} returns this
 */
proto.flightTracking.Flight.prototype.setAirlineName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string departure_airport = 4;
 * @return {string}
 */
proto.flightTracking.Flight.prototype.getDepartureAirport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.flightTracking.Flight} returns this
 */
proto.flightTracking.Flight.prototype.setDepartureAirport = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string arrival_airport = 5;
 * @return {string}
 */
proto.flightTracking.Flight.prototype.getArrivalAirport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.flightTracking.Flight} returns this
 */
proto.flightTracking.Flight.prototype.setArrivalAirport = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.flightTracking.FlightRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.flightTracking.FlightRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flightTracking.FlightRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flightTracking.FlightRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    flightId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.flightTracking.FlightRequest}
 */
proto.flightTracking.FlightRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flightTracking.FlightRequest;
  return proto.flightTracking.FlightRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flightTracking.FlightRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flightTracking.FlightRequest}
 */
proto.flightTracking.FlightRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlightId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.flightTracking.FlightRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flightTracking.FlightRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flightTracking.FlightRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flightTracking.FlightRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlightId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string flight_id = 1;
 * @return {string}
 */
proto.flightTracking.FlightRequest.prototype.getFlightId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.flightTracking.FlightRequest} returns this
 */
proto.flightTracking.FlightRequest.prototype.setFlightId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.flightTracking);
