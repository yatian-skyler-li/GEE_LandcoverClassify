/* A JavaScript script using Google Earth Engine to classify land cover types in an areas defined in Tasmania, Australia */
/**** Start of imports. If edited, may not auto-convert in the playground. ****/
/* The Region of Interest (ROI) and landcover samples are defined using polygon tool in Google Earth Engine */
/* Water, urban, agriculture, forest, exposed are defined as five landcover classes in this project */
var ROI = 
    /* color: #ffc82d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[147.44731573938807, -41.666575229016786],
          [147.44731573938807, -42.368511333317095],
          [148.44707159876307, -42.368511333317095],
          [148.44707159876307, -41.666575229016786]]], null, false),
    urban = 
    /* color: #00ffff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([148.07625722138488, -42.12795345059188]),
            {
              "landcover": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([148.24092023873155, -42.09945653494975]),
            {
              "landcover": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([148.07537934442823, -42.13602989102836]),
            {
              "landcover": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([148.24585258916366, -42.10615230909596]),
            {
              "landcover": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([148.07126338863807, -42.11854247120296]),
            {
              "landcover": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([148.2889837392601, -42.12441486612168]),
            {
              "landcover": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([148.28921176210395, -42.12648304529335]),
            {
              "landcover": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([148.24708865685227, -42.10762212636306]),
            {
              "landcover": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([148.3014024051517, -41.875565311991885]),
            {
              "landcover": 5,
              "system:index": "8"
            })]),
    water = /* color: #bf04c2 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([148.1375111958871, -42.12055450525663]),
            {
              "landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([148.17733663534023, -42.15619611924347]),
            {
              "landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([148.2277602378525, -42.12198840609229]),
            {
              "landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([148.18527575231923, -42.10301600685856]),
            {
              "landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([148.11337282742335, -42.22566386191213]),
            {
              "landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([148.3962707766421, -42.01582941710461]),
            {
              "landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([148.3688049563296, -41.79608665716005]),
            {
              "landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([148.75177107853762, -41.791991663147755]),
            {
              "landcover": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([148.69134627385012, -42.0086873221502]),
            {
              "landcover": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([147.40062384485682, -40.86432681579981]),
            {
              "landcover": 1,
              "system:index": "9"
            })]),
    agriculture = 
    /* color: #ff0000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([147.5339990111895, -42.26391548052339]),
            {
              "landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([147.4618769912954, -42.26254634222551]),
            {
              "landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([147.06528646298966, -42.34829965597442]),
            {
              "landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([147.45457896645783, -42.446943659369836]),
            {
              "landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([147.4448853014164, -42.45930550544803]),
            {
              "landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([147.93358026864533, -42.51593380504965]),
            {
              "landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([147.48355660125776, -42.12015096058707]),
            {
              "landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([147.35169434540254, -42.105007086515535]),
            {
              "landcover": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([147.47769379608613, -41.90473894767923]),
            {
              "landcover": 2,
              "system:index": "8"
            })]),
    forest = 
    /* color: #006500 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([147.8559807761568, -42.26326486788363]),
            {
              "landcover": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([148.09973993143024, -42.63060444157958]),
            {
              "landcover": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([148.16323997760176, -41.81785770223779]),
            {
              "landcover": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([147.68573523468197, -41.37218966589385]),
            {
              "landcover": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([147.9379616067633, -41.32837605939673]),
            {
              "landcover": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([147.61046714553072, -41.25359446412429]),
            {
              "landcover": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([147.9776406011231, -41.138808692450475]),
            {
              "landcover": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([147.59071883382381, -41.28406230167594]),
            {
              "landcover": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([147.27135049007526, -41.30722102590053]),
            {
              "landcover": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([146.71516762874714, -41.39362151050527]),
            {
              "landcover": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([147.79746035255494, -42.441449516387294]),
            {
              "landcover": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([147.77024158902512, -41.560686779664]),
            {
              "landcover": 3,
              "system:index": "11"
            })]),
    exposed = 
    /* color: #0000ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([147.38814502982063, -42.572529453506334]),
            {
              "landcover": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([147.1660152080433, -42.52646435304842]),
            {
              "landcover": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([146.79886506062672, -42.42770982528306]),
            {
              "landcover": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([147.3151871350548, -42.31689108183185]),
            {
              "landcover": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([148.12105375570118, -42.0437900424901]),
            {
              "landcover": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([146.76380422406885, -42.44468153797872]),
            {
              "landcover": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([147.1726138604876, -42.539914522606196]),
            {
              "landcover": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([147.44166556205087, -42.20113915222447]),
            {
              "landcover": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([148.01972734044062, -41.99388622324209]),
            {
              "landcover": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([148.05189146968812, -42.18452550829164]),
            {
              "landcover": 4,
              "system:index": "9"
            })]),
    waterT = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([148.07874920566263, -42.25396477633542]),
            {
              "landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([148.05677654941263, -42.30984590197997]),
            {
              "landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([148.198225524022, -42.23261527298391]),
            {
              "landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([148.15153362949076, -42.35451511571694]),
            {
              "landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([148.3135819693345, -42.00851964753582]),
            {
              "landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([148.45805792688807, -41.5256702209959]),
            {
              "landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([148.33171515345057, -42.66085089618193]),
            {
              "landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([148.46906836776236, -42.31253281380878]),
            {
              "landcover": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([148.10520659747297, -42.49174851580566]),
            {
              "landcover": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([148.59959136309797, -41.26480484258893]),
            {
              "landcover": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([148.67486678166262, -42.08211475567201]),
            {
              "landcover": 1,
              "system:index": "10"
            })]),
    forestT = 
    /* color: #98ff00 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([147.87550213535013, -42.16750556553396]),
            {
              "landcover": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([147.85490277011576, -42.172594677296935]),
            {
              "landcover": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([147.84744318145005, -42.28750182032797]),
            {
              "landcover": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([147.77053888457505, -42.114556961049296]),
            {
              "landcover": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([148.06085956822574, -42.628702097877024]),
            {
              "landcover": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([147.82230864825422, -41.34733348601215]),
            {
              "landcover": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([146.50944243731672, -42.34778979569052]),
            {
              "landcover": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([147.79209624591047, -42.48972322312172]),
            {
              "landcover": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([148.15464507403547, -41.89757864875541]),
            {
              "landcover": 3,
              "system:index": "8"
            })]),
    urbanT = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([148.06875599156558, -42.13303366149383]),
            {
              "landcover": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([148.28496349583804, -42.12482213602436]),
            {
              "landcover": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([147.9142908976566, -42.5060509934474]),
            {
              "landcover": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([147.56193244628798, -42.78123561280594]),
            {
              "landcover": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([147.61617744140517, -42.85691005992395]),
            {
              "landcover": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([147.87420334531478, -42.56039115790849]),
            {
              "landcover": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([147.92029663865605, -42.51450654078445]),
            {
              "landcover": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([147.8128745685836, -42.887223830298495]),
            {
              "landcover": 5,
              "system:index": "7"
            })]),
    agricultureT = 
    /* color: #d63000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([147.01610236048182, -42.33786231514436]),
            {
              "landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([147.46708818827085, -42.4700852113968]),
            {
              "landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([147.41822465810588, -42.382251874440875]),
            {
              "landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([147.4435998919222, -42.33993552327106]),
            {
              "landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([147.92476542011377, -42.655823223653265]),
            {
              "landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([147.57358558462752, -42.755374346023345]),
            {
              "landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([147.45033271597518, -42.693329729230584]),
            {
              "landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([147.26081855581893, -42.657696788360326]),
            {
              "landcover": 2,
              "system:index": "7"
            })]),
    exposedT = 
    /* color: #98ff00 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([147.98388929888162, -42.34345726511633]),
            {
              "landcover": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([147.66871901079568, -42.390891889180054]),
            {
              "landcover": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([148.2560014133939, -41.75956800320443]),
            {
              "landcover": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([146.81092518374896, -42.50363576661302]),
            {
              "landcover": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([147.23816407723604, -42.38049191998109]),
            {
              "landcover": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([147.19455726431502, -42.66123147421918]),
            {
              "landcover": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([147.94474391727607, -42.312814845639586]),
            {
              "landcover": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([147.6801045514477, -42.203852166287106]),
            {
              "landcover": 4,
              "system:index": "7"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// select landsat 8 imagery
var image = ee.Image(ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
    .filterBounds(ROI)
    .filterDate('2017-5-1', '2018-10-1')
    .sort('CLOUD_COVER')
    .first());
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'],min:0, max: 3000}, 'Tassie');
//merge reference classes 
var classNames = water.merge(urban).merge(agriculture).merge(forest).merge(exposed);
print(classNames)

// create training data
var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'];
var training = image.select(bands).sampleRegions({
  collection: classNames,
  properties: ['landcover'],
  scale: 30
});

// run the classifier using training data
var classifier = ee.Classifier.smileRandomForest(10).train({
  features: training,
  classProperty: 'landcover',
  inputProperties: bands
});
//print(training);

var classified = image.select(bands).classify(classifier);
Map.centerObject(ROI);
// Define a color palette for the classification.
var palette = ['blue', 'green', 'red', 'purple', 'yellow'];

// Display the classified layer with the defined palette.
Map.addLayer(classified, {palette: palette, min: 1, max: 5}, 'classified');

// validation data merge
var valNames = waterT.merge(urbanT).merge(agricultureT).merge(forestT).merge(exposedT);

// validation of the data 
var validation = classified.sampleRegions({
  collection: valNames,
  properties: ['landcover'],
  scale: 30,
});
print(valNames)
print(validation);

// accuracy assessment
var testAccuracy = validation.errorMatrix('landcover', 'classification');
print('Validation error matrix: ', testAccuracy);
print('Validation Overall Accuracy accuracy: ', testAccuracy.accuracy());
print('Validation Consumers Accuracy accuracy: ', testAccuracy.consumersAccuracy());
print('Validation Producers Accuracy accuracy: ', testAccuracy.producersAccuracy());




