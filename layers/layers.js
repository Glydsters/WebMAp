var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Foodstores_1 = new ol.format.GeoJSON();
var features_Foodstores_1 = format_Foodstores_1.readFeatures(json_Foodstores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Foodstores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Foodstores_1.addFeatures(features_Foodstores_1);
var lyr_Foodstores_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Foodstores_1, 
                style: style_Foodstores_1,
                popuplayertitle: "Food stores",
                interactive: true,
                title: '<img src="styles/legend/Foodstores_1.png" /> Food stores'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Foodstores_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Foodstores_1];
lyr_Foodstores_1.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Photos': 'Photos', });
lyr_Foodstores_1.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Photos': 'ExternalResource', });
lyr_Foodstores_1.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'header label - visible with data', 'Longitude': 'header label - visible with data', 'Photos': 'header label - visible with data', });
lyr_Foodstores_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});