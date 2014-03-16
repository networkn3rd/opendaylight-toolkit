define(['backbone','underscore','models/DeviceModel'], function(Backbone, _, DeviceModel) {
	var DevicesCollection = Backbone.Collection.extend({
		model: DeviceModel
	});
	return DevicesCollection;
});
