!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@abandonware/noble")):"function"==typeof define&&define.amd?define(["exports","@abandonware/noble"],t):t((e=e||self).webbluetooth={},e.noble)}(this,(function(e,t){"use strict";var r,i,n;function s(){}function o(){o.init.call(this)}function a(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function c(e,t,r){if(t)e.call(r);else for(var i=e.length,n=m(e,i),s=0;s<i;++s)n[s].call(r)}function _(e,t,r,i){if(t)e.call(r,i);else for(var n=e.length,s=m(e,n),o=0;o<n;++o)s[o].call(r,i)}function d(e,t,r,i,n){if(t)e.call(r,i,n);else for(var s=e.length,o=m(e,s),a=0;a<s;++a)o[a].call(r,i,n)}function u(e,t,r,i,n,s){if(t)e.call(r,i,n,s);else for(var o=e.length,a=m(e,o),c=0;c<o;++c)a[c].call(r,i,n,s)}function l(e,t,r,i){if(t)e.apply(r,i);else for(var n=e.length,s=m(e,n),o=0;o<n;++o)s[o].apply(r,i)}function h(e,t,r,i){var n,o,c,_;if("function"!=typeof r)throw new TypeError('"listener" argument must be a function');if((o=e._events)?(o.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),o=e._events),c=o[t]):(o=e._events=new s,e._eventsCount=0),c){if("function"==typeof c?c=o[t]=i?[r,c]:[c,r]:i?c.unshift(r):c.push(r),!c.warned&&(n=a(e))&&n>0&&c.length>n){c.warned=!0;var d=new Error("Possible EventEmitter memory leak detected. "+c.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");d.name="MaxListenersExceededWarning",d.emitter=e,d.type=t,d.count=c.length,_=d,"function"==typeof console.warn?console.warn(_):console.log(_)}}else c=o[t]=r,++e._eventsCount;return e}function f(e,t,r){var i=!1;function n(){e.removeListener(t,n),i||(i=!0,r.apply(e,arguments))}return n.listener=r,n}function p(e){var t=this._events;if(t){var r=t[e];if("function"==typeof r)return 1;if(r)return r.length}return 0}function m(e,t){for(var r=new Array(t);t--;)r[t]=e[t];return r}s.prototype=Object.create(null),o.EventEmitter=o,o.usingDomains=!1,o.prototype.domain=void 0,o.prototype._events=void 0,o.prototype._maxListeners=void 0,o.defaultMaxListeners=10,o.init=function(){this.domain=null,o.usingDomains&&(void 0).active&&(void 0).Domain,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new s,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return a(this)},o.prototype.emit=function(e){var t,r,i,n,s,o,a,h="error"===e;if(o=this._events)h=h&&null==o.error;else if(!h)return!1;if(a=this.domain,h){if(t=arguments[1],!a){if(t instanceof Error)throw t;var f=new Error('Uncaught, unspecified "error" event. ('+t+")");throw f.context=t,f}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=a,t.domainThrown=!1,a.emit("error",t),!1}if(!(r=o[e]))return!1;var p="function"==typeof r;switch(i=arguments.length){case 1:c(r,p,this);break;case 2:_(r,p,this,arguments[1]);break;case 3:d(r,p,this,arguments[1],arguments[2]);break;case 4:u(r,p,this,arguments[1],arguments[2],arguments[3]);break;default:for(n=new Array(i-1),s=1;s<i;s++)n[s-1]=arguments[s];l(r,p,this,n)}return!0},o.prototype.addListener=function(e,t){return h(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return h(this,e,t,!0)},o.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,f(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,f(this,e,t)),this},o.prototype.removeListener=function(e,t){var r,i,n,o,a;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(i=this._events))return this;if(!(r=i[e]))return this;if(r===t||r.listener&&r.listener===t)0==--this._eventsCount?this._events=new s:(delete i[e],i.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(n=-1,o=r.length;o-- >0;)if(r[o]===t||r[o].listener&&r[o].listener===t){a=r[o].listener,n=o;break}if(n<0)return this;if(1===r.length){if(r[0]=void 0,0==--this._eventsCount)return this._events=new s,this;delete i[e]}else!function(e,t){for(var r=t,i=r+1,n=e.length;i<n;r+=1,i+=1)e[r]=e[i];e.pop()}(r,n);i.removeListener&&this.emit("removeListener",e,a||t)}return this},o.prototype.removeAllListeners=function(e){var t,r;if(!(r=this._events))return this;if(!r.removeListener)return 0===arguments.length?(this._events=new s,this._eventsCount=0):r[e]&&(0==--this._eventsCount?this._events=new s:delete r[e]),this;if(0===arguments.length){for(var i,n=Object.keys(r),o=0;o<n.length;++o)"removeListener"!==(i=n[o])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=new s,this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},o.prototype.listeners=function(e){var t,r=this._events;return r&&(t=r[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(t):[]},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};class v extends o{addEventListener(e,t){return super.addListener(e,t)}removeEventListener(e,t){return super.removeListener(e,t)}dispatchEvent(e,t){return super.emit(e,{type:e,target:this,value:t})}}function g(e){return"number"==typeof e&&(e=e.toString(16)),(e=e.toLowerCase()).length<=8&&(e=("00000000"+e).slice(-8)+"-0000-1000-8000-00805f9b34fb"),32===e.length&&(e=e.match(/^([0-9a-f]{8})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{12})$/).splice(1).join("-")),e}function w(t){return"string"==typeof t&&e.bluetoothServices[t]&&(t=e.bluetoothServices[t]),g(t)}function b(t){return"string"==typeof t&&e.bluetoothCharacteristics[t]&&(t=e.bluetoothCharacteristics[t]),g(t)}function y(t){return"string"==typeof t&&e.bluetoothDescriptors[t]&&(t=e.bluetoothDescriptors[t]),g(t)}(r=e.bluetoothServices||(e.bluetoothServices={}))[r.alert_notification=6161]="alert_notification",r[r.automation_io=6165]="automation_io",r[r.battery_service=6159]="battery_service",r[r.blood_pressure=6160]="blood_pressure",r[r.body_composition=6171]="body_composition",r[r.bond_management=6174]="bond_management",r[r.continuous_glucose_monitoring=6175]="continuous_glucose_monitoring",r[r.current_time=6149]="current_time",r[r.cycling_power=6168]="cycling_power",r[r.cycling_speed_and_cadence=6166]="cycling_speed_and_cadence",r[r.device_information=6154]="device_information",r[r.environmental_sensing=6170]="environmental_sensing",r[r.generic_access=6144]="generic_access",r[r.generic_attribute=6145]="generic_attribute",r[r.glucose=6152]="glucose",r[r.health_thermometer=6153]="health_thermometer",r[r.heart_rate=6157]="heart_rate",r[r.human_interface_device=6162]="human_interface_device",r[r.immediate_alert=6146]="immediate_alert",r[r.indoor_positioning=6177]="indoor_positioning",r[r.internet_protocol_support=6176]="internet_protocol_support",r[r.link_loss=6147]="link_loss",r[r.location_and_navigation=6169]="location_and_navigation",r[r.next_dst_change=6151]="next_dst_change",r[r.phone_alert_status=6158]="phone_alert_status",r[r.pulse_oximeter=6178]="pulse_oximeter",r[r.reference_time_update=6150]="reference_time_update",r[r.running_speed_and_cadence=6164]="running_speed_and_cadence",r[r.scan_parameters=6163]="scan_parameters",r[r.tx_power=6148]="tx_power",r[r.user_data=6172]="user_data",r[r.weight_scale=6173]="weight_scale",(i=e.bluetoothCharacteristics||(e.bluetoothCharacteristics={}))[i.aerobic_heart_rate_lower_limit=10878]="aerobic_heart_rate_lower_limit",i[i.aerobic_heart_rate_upper_limit=10884]="aerobic_heart_rate_upper_limit",i[i.aerobic_threshold=10879]="aerobic_threshold",i[i.age=10880]="age",i[i.aggregate=10842]="aggregate",i[i.alert_category_id=10819]="alert_category_id",i[i.alert_category_id_bit_mask=10818]="alert_category_id_bit_mask",i[i.alert_level=10758]="alert_level",i[i.alert_notification_control_point=10820]="alert_notification_control_point",i[i.alert_status=10815]="alert_status",i[i.altitude=10931]="altitude",i[i.anaerobic_heart_rate_lower_limit=10881]="anaerobic_heart_rate_lower_limit",i[i.anaerobic_heart_rate_upper_limit=10882]="anaerobic_heart_rate_upper_limit",i[i.anaerobic_threshold=10883]="anaerobic_threshold",i[i.analog=10840]="analog",i[i.apparent_wind_direction=10867]="apparent_wind_direction",i[i.apparent_wind_speed=10866]="apparent_wind_speed",i[i["gap.appearance"]=10753]="gap.appearance",i[i.barometric_pressure_trend=10915]="barometric_pressure_trend",i[i.battery_level=10777]="battery_level",i[i.blood_pressure_feature=10825]="blood_pressure_feature",i[i.blood_pressure_measurement=10805]="blood_pressure_measurement",i[i.body_composition_feature=10907]="body_composition_feature",i[i.body_composition_measurement=10908]="body_composition_measurement",i[i.body_sensor_location=10808]="body_sensor_location",i[i.bond_management_control_point=10916]="bond_management_control_point",i[i.bond_management_feature=10917]="bond_management_feature",i[i.boot_keyboard_input_report=10786]="boot_keyboard_input_report",i[i.boot_keyboard_output_report=10802]="boot_keyboard_output_report",i[i.boot_mouse_input_report=10803]="boot_mouse_input_report",i[i["gap.central_address_resolution_support"]=10918]="gap.central_address_resolution_support",i[i.cgm_feature=10920]="cgm_feature",i[i.cgm_measurement=10919]="cgm_measurement",i[i.cgm_session_run_time=10923]="cgm_session_run_time",i[i.cgm_session_start_time=10922]="cgm_session_start_time",i[i.cgm_specific_ops_control_point=10924]="cgm_specific_ops_control_point",i[i.cgm_status=10921]="cgm_status",i[i.csc_feature=10844]="csc_feature",i[i.csc_measurement=10843]="csc_measurement",i[i.current_time=10795]="current_time",i[i.cycling_power_control_point=10854]="cycling_power_control_point",i[i.cycling_power_feature=10853]="cycling_power_feature",i[i.cycling_power_measurement=10851]="cycling_power_measurement",i[i.cycling_power_vector=10852]="cycling_power_vector",i[i.database_change_increment=10905]="database_change_increment",i[i.date_of_birth=10885]="date_of_birth",i[i.date_of_threshold_assessment=10886]="date_of_threshold_assessment",i[i.date_time=10760]="date_time",i[i.day_date_time=10762]="day_date_time",i[i.day_of_week=10761]="day_of_week",i[i.descriptor_value_changed=10877]="descriptor_value_changed",i[i["gap.device_name"]=10752]="gap.device_name",i[i.dew_point=10875]="dew_point",i[i.digital=10838]="digital",i[i.dst_offset=10765]="dst_offset",i[i.elevation=10860]="elevation",i[i.email_address=10887]="email_address",i[i.exact_time_256=10764]="exact_time_256",i[i.fat_burn_heart_rate_lower_limit=10888]="fat_burn_heart_rate_lower_limit",i[i.fat_burn_heart_rate_upper_limit=10889]="fat_burn_heart_rate_upper_limit",i[i.firmware_revision_string=10790]="firmware_revision_string",i[i.first_name=10890]="first_name",i[i.five_zone_heart_rate_limits=10891]="five_zone_heart_rate_limits",i[i.floor_number=10930]="floor_number",i[i.gender=10892]="gender",i[i.glucose_feature=10833]="glucose_feature",i[i.glucose_measurement=10776]="glucose_measurement",i[i.glucose_measurement_context=10804]="glucose_measurement_context",i[i.gust_factor=10868]="gust_factor",i[i.hardware_revision_string=10791]="hardware_revision_string",i[i.heart_rate_control_point=10809]="heart_rate_control_point",i[i.heart_rate_max=10893]="heart_rate_max",i[i.heart_rate_measurement=10807]="heart_rate_measurement",i[i.heat_index=10874]="heat_index",i[i.height=10894]="height",i[i.hid_control_point=10828]="hid_control_point",i[i.hid_information=10826]="hid_information",i[i.hip_circumference=10895]="hip_circumference",i[i.humidity=10863]="humidity",i[i["ieee_11073-20601_regulatory_certification_data_list"]=10794]="ieee_11073-20601_regulatory_certification_data_list",i[i.indoor_positioning_configuration=10925]="indoor_positioning_configuration",i[i.intermediate_blood_pressure=10806]="intermediate_blood_pressure",i[i.intermediate_temperature=10782]="intermediate_temperature",i[i.irradiance=10871]="irradiance",i[i.language=10914]="language",i[i.last_name=10896]="last_name",i[i.latitude=10926]="latitude",i[i.ln_control_point=10859]="ln_control_point",i[i.ln_feature=10858]="ln_feature",i[i["local_east_coordinate.xml"]=10929]="local_east_coordinate.xml",i[i.local_north_coordinate=10928]="local_north_coordinate",i[i.local_time_information=10767]="local_time_information",i[i.location_and_speed=10855]="location_and_speed",i[i.location_name=10933]="location_name",i[i.longitude=10927]="longitude",i[i.magnetic_declination=10796]="magnetic_declination",i[i.magnetic_flux_density_2D=10912]="magnetic_flux_density_2D",i[i.magnetic_flux_density_3D=10913]="magnetic_flux_density_3D",i[i.manufacturer_name_string=10793]="manufacturer_name_string",i[i.maximum_recommended_heart_rate=10897]="maximum_recommended_heart_rate",i[i.measurement_interval=10785]="measurement_interval",i[i.model_number_string=10788]="model_number_string",i[i.navigation=10856]="navigation",i[i.new_alert=10822]="new_alert",i[i["gap.peripheral_preferred_connection_parameters"]=10756]="gap.peripheral_preferred_connection_parameters",i[i["gap.peripheral_privacy_flag"]=10754]="gap.peripheral_privacy_flag",i[i.plx_continuous_measurement=10847]="plx_continuous_measurement",i[i.plx_features=10848]="plx_features",i[i.plx_spot_check_measurement=10846]="plx_spot_check_measurement",i[i.pnp_id=10832]="pnp_id",i[i.pollen_concentration=10869]="pollen_concentration",i[i.position_quality=10857]="position_quality",i[i.pressure=10861]="pressure",i[i.protocol_mode=10830]="protocol_mode",i[i.rainfall=10872]="rainfall",i[i["gap.reconnection_address"]=10755]="gap.reconnection_address",i[i.record_access_control_point=10834]="record_access_control_point",i[i.reference_time_information=10772]="reference_time_information",i[i.report=10829]="report",i[i.report_map=10827]="report_map",i[i.resting_heart_rate=10898]="resting_heart_rate",i[i.ringer_control_point=10816]="ringer_control_point",i[i.ringer_setting=10817]="ringer_setting",i[i.rsc_feature=10836]="rsc_feature",i[i.rsc_measurement=10835]="rsc_measurement",i[i.sc_control_point=10837]="sc_control_point",i[i.scan_interval_window=10831]="scan_interval_window",i[i.scan_refresh=10801]="scan_refresh",i[i.sensor_location=10845]="sensor_location",i[i.serial_number_string=10789]="serial_number_string",i[i["gatt.service_changed"]=10757]="gatt.service_changed",i[i.software_revision_string=10792]="software_revision_string",i[i.sport_type_for_aerobic_and_anaerobic_thresholds=10899]="sport_type_for_aerobic_and_anaerobic_thresholds",i[i.supported_new_alert_category=10823]="supported_new_alert_category",i[i.supported_unread_alert_category=10824]="supported_unread_alert_category",i[i.system_id=10787]="system_id",i[i.temperature=10862]="temperature",i[i.temperature_measurement=10780]="temperature_measurement",i[i.temperature_type=10781]="temperature_type",i[i.three_zone_heart_rate_limits=10900]="three_zone_heart_rate_limits",i[i.time_accuracy=10770]="time_accuracy",i[i.time_source=10771]="time_source",i[i.time_update_control_point=10774]="time_update_control_point",i[i.time_update_state=10775]="time_update_state",i[i.time_with_dst=10769]="time_with_dst",i[i.time_zone=10766]="time_zone",i[i.true_wind_direction=10865]="true_wind_direction",i[i.true_wind_speed=10864]="true_wind_speed",i[i.two_zone_heart_rate_limit=10901]="two_zone_heart_rate_limit",i[i.tx_power_level=10759]="tx_power_level",i[i.uncertainty=10932]="uncertainty",i[i.unread_alert_status=10821]="unread_alert_status",i[i.user_control_point=10911]="user_control_point",i[i.user_index=10906]="user_index",i[i.uv_index=10870]="uv_index",i[i.vo2_max=10902]="vo2_max",i[i.waist_circumference=10903]="waist_circumference",i[i.weight=10904]="weight",i[i.weight_measurement=10909]="weight_measurement",i[i.weight_scale_feature=10910]="weight_scale_feature",i[i.wind_chill=10873]="wind_chill",(n=e.bluetoothDescriptors||(e.bluetoothDescriptors={}))[n["gatt.characteristic_extended_properties"]=10496]="gatt.characteristic_extended_properties",n[n["gatt.characteristic_user_description"]=10497]="gatt.characteristic_user_description",n[n["gatt.client_characteristic_configuration"]=10498]="gatt.client_characteristic_configuration",n[n["gatt.server_characteristic_configuration"]=10499]="gatt.server_characteristic_configuration",n[n["gatt.characteristic_presentation_format"]=10500]="gatt.characteristic_presentation_format",n[n["gatt.characteristic_aggregate_format"]=10501]="gatt.characteristic_aggregate_format",n[n.valid_range=10502]="valid_range",n[n.external_report_reference=10503]="external_report_reference",n[n.report_reference=10504]="report_reference",n[n.number_of_digitals=10505]="number_of_digitals",n[n.value_trigger_setting=10506]="value_trigger_setting",n[n.es_configuration=10507]="es_configuration",n[n.es_measurement=10508]="es_measurement",n[n.es_trigger_setting=10509]="es_trigger_setting",n[n.time_trigger_setting=10510]="time_trigger_setting";class E extends o{constructor(){super(),this.deviceHandles={},this.serviceHandles={},this.characteristicHandles={},this.descriptorHandles={},this.charNotifies={},this.discoverFn=null,this.initialised=!1,this.enabled=!1,this.os="browser",this.enabled=this.state,t.on("stateChange",()=>{this.enabled!==this.state&&(this.enabled=this.state,this.emit(E.EVENT_ENABLED,this.enabled))})}get state(){return"poweredOn"===t.state}init(e){if(this.initialised)return e();t.on("discover",e=>{this.discoverFn&&this.discoverFn(e)}),this.initialised=!0,e()}checkForError(e,t,r){return function(i){if(i)e(i);else if("function"==typeof t){const e=[].slice.call(arguments,1);null===r?t.apply(this,e):setTimeout(()=>t.apply(this,e),r)}}}bufferToDataView(e){const t=new Uint8Array(e).buffer;return new DataView(t)}dataViewToBuffer(e){const t=new Uint8Array(e.buffer);return new Buffer(t)}validDevice(e,t){if(0===t.length)return!0;if(!e.advertisement.serviceUuids)return!1;const r=e.advertisement.serviceUuids.map(e=>g(e));return t.some(e=>r.indexOf(e)>=0)}deviceToBluetoothDevice(e){const t=e.address&&"unknown"!==e.address?e.address:e.id,r=[];e.advertisement.serviceUuids&&e.advertisement.serviceUuids.forEach(e=>{r.push(g(e))});const i=new Map;if(e.advertisement.manufacturerData){const t=e.advertisement.manufacturerData.readUInt16LE(0),r=e.advertisement.manufacturerData.slice(2);i.set(("0000"+t.toString(16)).slice(-4),this.bufferToDataView(r))}const n=new Map;return e.advertisement.serviceData&&e.advertisement.serviceData.forEach(e=>{n.set(g(e.uuid),this.bufferToDataView(e.data))}),{id:t,name:e.advertisement.localName,_serviceUUIDs:r,adData:{rssi:e.rssi,txPower:e.advertisement.txPowerLevel,serviceData:n,manufacturerData:i}}}getEnabled(e){function r(){e(this.state)}"unknown"===t.state||"poweredOff"===t.state?t.once("stateChange",r.bind(this)):r.call(this)}startScan(e,r,i,n){this.discoverFn=t=>{if(this.validDevice(t,e)){const e=this.deviceToBluetoothDevice(t);this.deviceHandles[e.id]||(this.deviceHandles[e.id]=t,r(e))}},this.init(()=>{function e(){!0===this.state?t.startScanning([],!0,this.checkForError(n,i)):n("adapter not enabled")}this.deviceHandles={},"unknown"===t.state||"poweredOff"===t.state?t.once("stateChange",e.bind(this)):e.call(this)})}stopScan(e){this.discoverFn=null,t.stopScanning()}connect(e,t,r,i){const n=this.deviceHandles[e];n.removeAllListeners("connect"),n.removeAllListeners("disconnect"),n.once("connect",t),n.once("disconnect",()=>{this.serviceHandles={},this.characteristicHandles={},this.descriptorHandles={},this.charNotifies={},r()}),n.connect(this.checkForError(i))}disconnect(e,t){this.deviceHandles[e].disconnect(this.checkForError(t))}discoverServices(e,t,r,i){this.deviceHandles[e].discoverServices([],this.checkForError(i,e=>{const i=[];e.forEach(e=>{const r=g(e.uuid);(0===t.length||t.indexOf(r)>=0)&&(this.serviceHandles[r]||(this.serviceHandles[r]=e),i.push({uuid:r,primary:!0}))}),r(i)}))}discoverIncludedServices(e,t,r,i){this.serviceHandles[e].discoverIncludedServices([],this.checkForError(i,e=>{const i=[];e.forEach(e=>{const r=g(e.uuid);(0===t.length||t.indexOf(r)>=0)&&(this.serviceHandles[r]||(this.serviceHandles[r]=e),i.push({uuid:r,primary:!1}))},this),r(i)}))}discoverCharacteristics(e,t,r,i){this.serviceHandles[e].discoverCharacteristics([],this.checkForError(i,e=>{const i=[];e.forEach(e=>{const r=g(e.uuid);(0===t.length||t.indexOf(r)>=0)&&(this.characteristicHandles[r]||(this.characteristicHandles[r]=e),i.push({uuid:r,properties:{broadcast:e.properties.indexOf("broadcast")>=0,read:e.properties.indexOf("read")>=0,writeWithoutResponse:e.properties.indexOf("writeWithoutResponse")>=0,write:e.properties.indexOf("write")>=0,notify:e.properties.indexOf("notify")>=0,indicate:e.properties.indexOf("indicate")>=0,authenticatedSignedWrites:e.properties.indexOf("authenticatedSignedWrites")>=0,reliableWrite:e.properties.indexOf("reliableWrite")>=0,writableAuxiliaries:e.properties.indexOf("writableAuxiliaries")>=0}}),e.on("data",(e,t)=>{if(!0===t&&"function"==typeof this.charNotifies[r]){const t=this.bufferToDataView(e);this.charNotifies[r](t)}}))},this),r(i)}))}discoverDescriptors(e,t,r,i){const n=this.characteristicHandles[e];n.discoverDescriptors(this.checkForError(i,e=>{const i=[];e.forEach(e=>{const r=g(e.uuid);if(0===t.length||t.indexOf(r)>=0){const t=n.uuid+"-"+e.uuid;this.descriptorHandles[t]||(this.descriptorHandles[t]=e),i.push({uuid:r})}},this),r(i)}))}readCharacteristic(e,t,r){this.characteristicHandles[e].read(this.checkForError(r,e=>{const r=this.bufferToDataView(e);t(r)}))}writeCharacteristic(e,t,r,i){const n=this.dataViewToBuffer(t),s=this.characteristicHandles[e],o=s.properties.indexOf("writeWithoutResponse")>=0||s.properties.indexOf("authenticatedSignedWrites")>=0,a="darwin"!==this.os&&o?25:null;s.write(n,o,this.checkForError(i,r,a))}enableNotify(e,t,r,i){if(this.charNotifies[e])return this.charNotifies[e]=t,r();this.characteristicHandles[e].once("notify",n=>{if(!0!==n)return i("notify failed to enable");this.charNotifies[e]=t,r()}),this.characteristicHandles[e].notify(!0,this.checkForError(i))}disableNotify(e,t,r){if(!this.charNotifies[e])return t();this.characteristicHandles[e].once("notify",i=>{if(!1!==i)return r("notify failed to disable");this.charNotifies[e]&&delete this.charNotifies[e],t()}),this.characteristicHandles[e].notify(!1,this.checkForError(r))}readDescriptor(e,t,r){this.descriptorHandles[e].readValue(this.checkForError(r,e=>{const r=this.bufferToDataView(e);t(r)}))}writeDescriptor(e,t,r,i){const n=this.dataViewToBuffer(t);this.descriptorHandles[e].writeValue(n,this.checkForError(i,r))}}E.EVENT_ENABLED="enabledchanged";const D=new E;class x{constructor(e){this.characteristic=null,this.uuid=null,this._value=null,this.handle=null,this.characteristic=e.characteristic,this.uuid=e.uuid,this._value=e.value,this.handle=`${this.characteristic.uuid}-${this.uuid}`}get value(){return this._value}readValue(){return new Promise((e,t)=>{if(!this.characteristic.service.device.gatt.connected)return t("readValue error: device not connected");D.readDescriptor(this.handle,t=>{this._value=t,e(t)},e=>{t(`readValue error: ${e}`)})})}writeValue(e){return new Promise((t,r)=>{if(!this.characteristic.service.device.gatt.connected)return r("writeValue error: device not connected");const i=function(e){return void 0!==e.buffer}(e)?e.buffer:e,n=new DataView(i);D.writeDescriptor(this.handle,n,()=>{this._value=n,t()},e=>{r(`writeValue error: ${e}`)})})}}class T extends v{constructor(e){super(),this.service=null,this.uuid=null,this._value=null,this.handle=null,this.descriptors=null,this.service=e.service,this.uuid=e.uuid,this.properties=e.properties,this._value=e.value,this.handle=this.uuid}get value(){return this._value}setValue(e,t){this._value=e,t&&(this.dispatchEvent(T.EVENT_CHANGED,e),this.service.dispatchEvent(T.EVENT_CHANGED,e),this.service.device.dispatchEvent(T.EVENT_CHANGED,e),this.service.device._bluetooth.dispatchEvent(T.EVENT_CHANGED,e))}getDescriptor(e){return new Promise((t,r)=>this.service.device.gatt.connected?e?void this.getDescriptors(e).then(e=>{if(1!==e.length)return r("getDescriptor error: descriptor not found");t(e[0])}).catch(e=>{r(`getDescriptor error: ${e}`)}):r("getDescriptor error: no descriptor specified"):r("getDescriptor error: device not connected"))}getDescriptors(e){return new Promise((t,r)=>{if(!this.service.device.gatt.connected)return r("getDescriptors error: device not connected");function i(){if(!e)return t(this.descriptors);const i=this.descriptors.filter(t=>t.uuid===y(e));if(1!==i.length)return r("getDescriptors error: descriptor not found");t(i)}if(this.descriptors)return i.call(this);D.discoverDescriptors(this.handle,[],e=>{this.descriptors=e.map(e=>(Object.assign(e,{characteristic:this}),new x(e))),i.call(this)},e=>{r(`getDescriptors error: ${e}`)})})}readValue(){return new Promise((e,t)=>{if(!this.service.device.gatt.connected)return t("readValue error: device not connected");D.readCharacteristic(this.handle,t=>{this.setValue(t,!0),e(t)},e=>{t(`readValue error: ${e}`)})})}writeValue(e){return new Promise((t,r)=>{if(!this.service.device.gatt.connected)return r("writeValue error: device not connected");const i=function(e){return void 0!==e.buffer}(e)?e.buffer:e,n=new DataView(i);D.writeCharacteristic(this.handle,n,()=>{this.setValue(n),t()},e=>{r(`writeValue error: ${e}`)})})}startNotifications(){return new Promise((e,t)=>{if(!this.service.device.gatt.connected)return t("startNotifications error: device not connected");D.enableNotify(this.handle,e=>{this.setValue(e,!0)},()=>{e(this)},e=>{t(`startNotifications error: ${e}`)})})}stopNotifications(){return new Promise((e,t)=>{if(!this.service.device.gatt.connected)return t("stopNotifications error: device not connected");D.disableNotify(this.handle,()=>{e(this)},e=>{t(`stopNotifications error: ${e}`)})})}}T.EVENT_CHANGED="characteristicvaluechanged";class N extends v{constructor(e){super(),this.device=null,this.uuid=null,this.isPrimary=!1,this.handle=null,this.services=null,this.characteristics=null,this.device=e.device,this.uuid=e.uuid,this.isPrimary=e.isPrimary,this.handle=this.uuid,this.dispatchEvent(N.EVENT_ADDED),this.device.dispatchEvent(N.EVENT_ADDED),this.device._bluetooth.dispatchEvent(N.EVENT_ADDED)}getCharacteristic(e){return new Promise((t,r)=>this.device.gatt.connected?e?void this.getCharacteristics(e).then(e=>{if(1!==e.length)return r("getCharacteristic error: characteristic not found");t(e[0])}).catch(e=>{r(`getCharacteristic error: ${e}`)}):r("getCharacteristic error: no characteristic specified"):r("getCharacteristic error: device not connected"))}getCharacteristics(e){return new Promise((t,r)=>{if(!this.device.gatt.connected)return r("getCharacteristics error: device not connected");function i(){if(!e)return t(this.characteristics);e=b(e);const i=this.characteristics.filter(t=>t.uuid===e);if(1!==i.length)return r("getCharacteristics error: characteristic not found");t(i)}if(this.characteristics)return i.call(this);D.discoverCharacteristics(this.handle,[],e=>{this.characteristics=e.map(e=>(Object.assign(e,{service:this}),new T(e))),i.call(this)},e=>{r(`getCharacteristics error: ${e}`)})})}getIncludedService(e){return new Promise((t,r)=>this.device.gatt.connected?e?void this.getIncludedServices(e).then(e=>{if(1!==e.length)return r("getIncludedService error: service not found");t(e[0])}).catch(e=>{r(`getIncludedService error: ${e}`)}):r("getIncludedService error: no service specified"):r("getIncludedService error: device not connected"))}getIncludedServices(e){return new Promise((t,r)=>{if(!this.device.gatt.connected)return r("getIncludedServices error: device not connected");function i(){if(!e)return t(this.services);const i=this.services.filter(t=>t.uuid===w(e));if(1!==i.length)return r("getIncludedServices error: service not found");t(i)}if(this.services)return i.call(this);D.discoverIncludedServices(this.handle,this.device._allowedServices,e=>{this.services=e.map(e=>(Object.assign(e,{device:this.device}),new N(e))),i.call(this)},e=>{r(`getIncludedServices error: ${e}`)})})}}N.EVENT_ADDED="serviceadded",N.EVENT_CHANGED="servicechanged",N.EVENT_REMOVED="serviceremoved";class S{constructor(e){this.device=null,this._connected=!1,this.handle=null,this.services=null,this.device=e,this.handle=this.device.id}get connected(){return this._connected}connect(){return new Promise((e,t)=>{if(this.connected)return t("connect error: device already connected");D.connect(this.handle,()=>{this._connected=!0,e(this)},()=>{this.services=null,this._connected=!1,this.device.dispatchEvent(V.EVENT_DISCONNECTED),this.device._bluetooth.dispatchEvent(V.EVENT_DISCONNECTED)},e=>{t(`connect Error: ${e}`)})})}disconnect(){D.disconnect(this.handle),this._connected=!1}getPrimaryService(e){return new Promise((t,r)=>this.connected?e?void this.getPrimaryServices(e).then(e=>{if(1!==e.length)return r("getPrimaryService error: service not found");t(e[0])}).catch(e=>{r(`getPrimaryService error: ${e}`)}):r("getPrimaryService error: no service specified"):r("getPrimaryService error: device not connected"))}getPrimaryServices(e){return new Promise((t,r)=>{if(!this.connected)return r("getPrimaryServices error: device not connected");function i(){if(!e)return t(this.services);const i=this.services.filter(t=>t.uuid===w(e));if(1!==i.length)return r("getPrimaryServices error: service not found");t(i)}if(this.services)return i.call(this);D.discoverServices(this.handle,this.device._allowedServices,e=>{this.services=e.map(e=>(Object.assign(e,{device:this.device}),new N(e))),i.call(this)},e=>{r(`getPrimaryServices error: ${e}`)})})}}class V extends v{constructor(e){super(),this.id=null,this.name=null,this.gatt=null,this.watchingAdvertisements=!1,this._bluetooth=null,this._allowedServices=[],this._serviceUUIDs=[],this.id=e.id,this.name=e.name,this.gatt=e.gatt,this.watchAdvertisements=e.watchAdvertisements,this.adData=e.adData,this._bluetooth=e._bluetooth,this._allowedServices=e._allowedServices,this._serviceUUIDs=e._serviceUUIDs,this.name||(this.name=`Unknown or Unsupported Device (${this.id})`),this.gatt||(this.gatt=new S(this))}watchAdvertisements(){return new Promise((e,t)=>{t("watchAdvertisements error: method not implemented")})}unwatchAdvertisements(){return new Promise((e,t)=>{t("unwatchAdvertisements error: method not implemented")})}}V.EVENT_DISCONNECTED="gattserverdisconnected",V.EVENT_ADVERT="advertisementreceived";class C extends v{constructor(e){super(),this.deviceFound=null,this.scanTime=10240,this.scanner=null,e=e||{},this.referringDevice=e.referringDevice,this.deviceFound=e.deviceFound,e.scanTime&&(this.scanTime=1e3*e.scanTime),D.on(E.EVENT_ENABLED,e=>{this.dispatchEvent(C.EVENT_AVAILABILITY,e)})}filterDevice(e,t,r){let i=!1;return e.filters.forEach(e=>{if(!e.name||e.name===t.name){if(e.namePrefix){if(!t.name||e.namePrefix.length>t.name.length)return;if(e.namePrefix!==t.name.substr(0,e.namePrefix.length))return}if(e.services){const i=e.services.map(w);if(!i.every(e=>t._serviceUUIDs.indexOf(e)>-1))return;r=r.concat(i)}i=!0}}),!!i&&t}getAvailability(){return new Promise((e,t)=>{D.getEnabled(t=>{e(t)})})}requestDevice(e){return new Promise((t,r)=>{if(e=e||{},null!==this.scanner)return r("requestDevice error: request in progress");if(!e.acceptAllDevices&&!this.deviceFound){if(!e.filters||0===e.filters.length)return r(new TypeError("requestDevice error: no filters specified"));if(e.filters.some(e=>0===Object.keys(e).length))return r(new TypeError("requestDevice error: empty filter specified"));if(e.filters.some(e=>void 0!==e.namePrefix&&""===e.namePrefix))return r(new TypeError("requestDevice error: empty namePrefix specified"))}let i=[];e.filters&&e.filters.forEach(e=>{e.services&&(i=i.concat(e.services.map(w)))}),i=i.filter((e,t,r)=>r.indexOf(e)===t);let n=!1;D.startScan(i,r=>{let i=[];function s(e){this.cancelRequest().then(()=>{t(e)})}if(e.filters&&(r=this.filterDevice(e,r,i)),r){n=!0,e.optionalServices&&(i=i.concat(e.optionalServices.map(w)));const t=i.filter((e,t,r)=>r.indexOf(e)===t);Object.assign(r,{_bluetooth:this,_allowedServices:t});const a=new V(r);function o(){s.call(this,a)}this.deviceFound&&!0!==this.deviceFound(a,o.bind(this))||s.call(this,a)}},()=>{this.scanner=setTimeout(()=>{this.cancelRequest().then(()=>{n||r("requestDevice error: no devices found")})},this.scanTime)},e=>r(`requestDevice error: ${e}`))})}cancelRequest(){return new Promise((e,t)=>{this.scanner&&(clearTimeout(this.scanner),this.scanner=null,D.stopScan()),e()})}}C.EVENT_AVAILABILITY="availabilitychanged";const L=new C;e.Bluetooth=C,e.BluetoothDevice=V,e.BluetoothRemoteGATTCharacteristic=T,e.BluetoothRemoteGATTDescriptor=x,e.BluetoothRemoteGATTServer=S,e.BluetoothRemoteGATTService=N,e.bluetooth=L,e.getCanonicalUUID=g,e.getCharacteristicUUID=b,e.getDescriptorUUID=y,e.getServiceUUID=w,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=webbluetooth.umd.js.map
