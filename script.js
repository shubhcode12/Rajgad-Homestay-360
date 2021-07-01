(function(){
    var script = {
 "start": "this.playAudioList([this.audio_7ED6BE08_601F_6F9A_41C2_19BF17F9A73A]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_7F499D96_6003_2C89_41C0_1BBD55C47F95], 'cardboardAvailable'); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.IconButton_7F499D96_6003_2C89_41C0_1BBD55C47F95",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6F9CD583_6003_1C8F_41C0_333DEAD0B5A8_t.jpg",
 "id": "photo_6F9CD583_6003_1C8F_41C0_333DEAD0B5A8",
 "width": 2000,
 "label": "IMG_5363aaaaa",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_6F9CD583_6003_1C8F_41C0_333DEAD0B5A8.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1334
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6F9C98AF_6003_1496_41D5_65056FA55532_t.jpg",
 "id": "photo_6F9C98AF_6003_1496_41D5_65056FA55532",
 "width": 2000,
 "label": "IMG_5383aaaa",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_6F9C98AF_6003_1496_41D5_65056FA55532.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1334
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "14",
 "hfovMin": "150%",
 "id": "panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B",
 "overlays": [
  "this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_tcap0",
  "this.overlay_760408C5_5E6A_06FC_41C9_1DB367192F02",
  "this.overlay_76A622C3_5E6A_0AF4_41D5_75952B83877A",
  "this.overlay_6C57507B_5E3E_058B_41D6_1FB9F5E57D41",
  "this.overlay_6C57407B_5E3E_058B_41BF_5D4FDFCF899B",
  "this.overlay_6ACA5C1E_5E3E_1D8D_41C0_96804708A518",
  "this.overlay_6B48512F_5E3E_078B_41C3_F70C9FA5BCE6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 120.88,
   "class": "AdjacentPanorama",
   "backwardYaw": -175.82,
   "panorama": "this.panorama_46B13751_5DDE_0B94_4196_3A62A847FFED",
   "distance": 1
  },
  {
   "yaw": -129.59,
   "class": "AdjacentPanorama",
   "backwardYaw": 89.47,
   "panorama": "this.panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_camera"
},
{
 "initialPosition": {
  "yaw": -2.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_451FA390_600D_1489_41CB_59C94053C2CC"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "23",
 "hfovMin": "150%",
 "id": "panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA",
 "overlays": [
  "this.panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_tcap0",
  "this.overlay_6E9E33CD_5E36_0A8C_41CD_F5F8AF7F8F01"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -102.04,
   "class": "AdjacentPanorama",
   "backwardYaw": 85.12,
   "panorama": "this.panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_camera"
},
{
 "initialPosition": {
  "yaw": -4.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4677E5CC_600D_1C99_416F_4ADD56B38D03"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6F832360_6003_1589_41A0_F358589140C6_t.jpg",
 "id": "photo_6F832360_6003_1589_41A0_F358589140C6",
 "width": 2000,
 "label": "IMG_5351aaaa",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_6F832360_6003_1589_41A0_F358589140C6.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1334
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "07",
 "hfovMin": "150%",
 "id": "panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732",
 "overlays": [
  "this.panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_tcap0",
  "this.overlay_7DAF5171_5E6E_0794_41A3_C7AE707B07FB",
  "this.overlay_7AA900DB_5E6E_0694_41CC_C3A72DDD3FE1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -175.9,
   "class": "AdjacentPanorama",
   "backwardYaw": 112.38,
   "panorama": "this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC",
   "distance": 1
  },
  {
   "yaw": 157.72,
   "class": "AdjacentPanorama",
   "backwardYaw": -25.42,
   "panorama": "this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_t.jpg",
 "hfovMax": 130
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_7F499D96_6003_2C89_41C0_1BBD55C47F95"
 ],
 "mouseControlMode": "drag_rotation"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6F9A9FD4_601C_EC89_41D7_151852924487_t.jpg",
 "id": "photo_6F9A9FD4_601C_EC89_41D7_151852924487",
 "width": 2000,
 "label": "IMG_5410aaaa",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_6F9A9FD4_601C_EC89_41D7_151852924487.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1334
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "04",
 "hfovMin": "150%",
 "id": "panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB",
 "overlays": [
  "this.panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_tcap0",
  "this.overlay_7C447507_5E5A_0F7B_41C4_6C42EC802391",
  "this.overlay_7D3246C2_5E56_0AF5_412E_662FADFBE260",
  "this.overlay_7DEFA61A_5E56_0D95_4189_FB95AF43C2EA",
  "this.overlay_42E0C53D_6005_7DFA_41B1_8D6710FAA26E",
  "this.overlay_428F5595_6005_1C8A_41D0_101BE16EA96E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 156.34,
   "class": "AdjacentPanorama",
   "backwardYaw": 122.55,
   "panorama": "this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "10",
 "hfovMin": "150%",
 "id": "panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5",
 "overlays": [
  "this.panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_tcap0",
  "this.overlay_7503BD04_5E5A_1F7D_41CA_F01DDB4D5ED7",
  "this.overlay_72468296_5E5E_0A9C_4177_E798A31DF034",
  "this.overlay_6C73DD60_5E3A_1FB5_41D2_96D045773B9A",
  "this.overlay_6C8BDB9F_5E3A_7A8B_41D2_49C8A9AFEBBB",
  "this.overlay_6CA09254_5E3A_059C_41CD_39B021CDF50E",
  "this.overlay_6D7B0975_5E3A_079F_41D1_48751836FCBC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 177.82,
   "class": "AdjacentPanorama",
   "backwardYaw": 1.21,
   "panorama": "this.panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5",
   "distance": 1
  },
  {
   "yaw": 1.21,
   "class": "AdjacentPanorama",
   "backwardYaw": 177.57,
   "panorama": "this.panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -93.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45178380_600D_1489_41C5_8E5130F01946"
},
{
 "initialPosition": {
  "yaw": -67.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45569411_600D_138B_41B5_8F9C342E20FF"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_camera"
},
{
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "initialPosition": {
  "yaw": 15.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_465CC5AC_600D_1C99_41D4_B4D72EA7950E"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6F9E815C_6003_15BA_41C0_8857CD194E44_t.jpg",
 "id": "photo_6F9E815C_6003_15BA_41C0_8857CD194E44",
 "width": 2000,
 "label": "IMG_5345aaaa",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_6F9E815C_6003_15BA_41C0_8857CD194E44.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1334
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "01",
 "hfovMin": "150%",
 "id": "panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071",
 "overlays": [
  "this.panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0",
  "this.overlay_41DA143A_5E2A_0D94_41D7_25EBD2A5610C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 177.83,
   "class": "AdjacentPanorama",
   "backwardYaw": -16.75,
   "panorama": "this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 50.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_468E5485_600D_1C8B_41A1_75DF1EC45FC9"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_camera"
},
{
 "initialPosition": {
  "yaw": -57.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_46A834B6_600D_1C89_41C3_D2CBB071323B"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "15",
 "hfovMin": "150%",
 "id": "panorama_46B13751_5DDE_0B94_4196_3A62A847FFED",
 "overlays": [
  "this.panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_tcap0",
  "this.overlay_76AD9CF8_5E6A_1E94_41C0_77837E562B1E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -175.82,
   "class": "AdjacentPanorama",
   "backwardYaw": 120.88,
   "panorama": "this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6F9C36FA_6003_1C79_4194_7474C8017612_t.jpg",
 "id": "photo_6F9C36FA_6003_1C79_4194_7474C8017612",
 "width": 2000,
 "label": "IMG_5374aaaaaa",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_6F9C36FA_6003_1C79_4194_7474C8017612.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1334
},
{
 "initialPosition": {
  "yaw": 50.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_46925496_600D_1C89_41CB_18908AC69306"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_469CF672_5DDE_0D95_41D7_421452AA0901_camera"
},
{
 "initialPosition": {
  "yaw": 85.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45D0C2F0_600D_148A_41C0_77A282ED013B"
},
{
 "initialPosition": {
  "yaw": 163.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_48589223_600D_178E_41BC_8EC9B71F0721"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_480FB1DD_600D_14BA_41BA_AB25151AD971, 0)",
   "media": "this.album_67E9C3E0_5EF6_0AB5_41C1_5ACD3649EC1C",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
  }
 ],
 "id": "playList_480FB1DD_600D_14BA_41BA_AB25151AD971",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -23.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_46CA04E7_600D_1C97_41C6_0154F4C721FE"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_camera"
},
{
 "initialPosition": {
  "yaw": -0.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45F97351_600D_158B_41AB_B3E11F4EE615"
},
{
 "initialPosition": {
  "yaw": -98.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_46F9A529_600D_1D9B_41BC_7D5B12E074C2"
},
{
 "initialPosition": {
  "yaw": -87.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_46178549_600D_1D9B_41D3_BEFD0832CC3A"
},
{
 "initialPosition": {
  "yaw": -178.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_452D43B0_600D_1489_4194_6445AD91375E"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6FA31CB9_6003_2CFB_41D6_2BF1A107599F_t.jpg",
 "id": "photo_6FA31CB9_6003_2CFB_41D6_2BF1A107599F",
 "width": 2000,
 "label": "IMG_5325aaaa",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_6FA31CB9_6003_2CFB_41D6_2BF1A107599F.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1334
},
{
 "initialPosition": {
  "yaw": 4.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45EB1330_600D_1589_41D0_9B3A421A27F5"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "02",
 "hfovMin": "150%",
 "id": "panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC",
 "overlays": [
  "this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_tcap0",
  "this.overlay_41C81315_5E56_0B9C_41D4_C8E09D35A11D",
  "this.overlay_7E868F0B_5E5E_1B74_41D7_6B3FFBC93998",
  "this.overlay_741A6DFC_5E6A_3E8C_41D2_A0650A7E9D34",
  "this.overlay_7DDDC238_5E6A_0594_41C5_8426D7FD862E",
  "this.overlay_7A6A5815_5E6A_059F_41B7_248FBC5A6D91",
  "this.overlay_42537D36_60FD_ED89_41B9_CDEC3D33C964",
  "this.overlay_42EB738C_60FD_3499_4192_B5058C80A2F3",
  "this.overlay_43E58C4D_60FC_F39B_41D0_1251CE69E11B",
  "this.overlay_42E7DE30_60FF_2F8A_41C8_44FA8A26B0B2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -16.75,
   "class": "AdjacentPanorama",
   "backwardYaw": 177.83,
   "panorama": "this.panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071",
   "distance": 1
  },
  {
   "yaw": 112.38,
   "class": "AdjacentPanorama",
   "backwardYaw": -175.9,
   "panorama": "this.panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732",
   "distance": 1
  },
  {
   "yaw": -121.13,
   "class": "AdjacentPanorama",
   "backwardYaw": -41.9,
   "panorama": "this.panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3",
   "distance": 1
  },
  {
   "yaw": 136.12,
   "class": "AdjacentPanorama",
   "backwardYaw": -148.01,
   "panorama": "this.panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B",
   "distance": 1
  },
  {
   "yaw": 161.37,
   "class": "AdjacentPanorama",
   "backwardYaw": -94.63,
   "panorama": "this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -43.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4501A361_600D_158B_41D6_78D22C131977"
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "children": [
  {
   "label": "01",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "02",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "03",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "04",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "05",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "06",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "07",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "08",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "09",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "10",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "11",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "label": "13",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "label": "14",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "label": "15",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "label": "16",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "label": "17",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "label": "18",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "label": "19",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "label": "20",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  },
  {
   "label": "21",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  },
  {
   "label": "22",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  },
  {
   "label": "23",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "label": "Media",
 "id": "Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "class": "Menu",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "initialPosition": {
  "yaw": -170.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_450F7370_600D_1589_41C9_F664BD12404A"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "20",
 "hfovMin": "150%",
 "id": "panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3",
 "overlays": [
  "this.panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_tcap0",
  "this.overlay_715F870A_5E2E_0B75_41C5_A4D3A7CB6139",
  "this.overlay_6CBB503F_5E36_058C_41CC_3D9CB339518D",
  "this.overlay_6CBB203F_5E36_058C_41D5_8DEF788FF34B",
  "this.overlay_68ED2213_5E3E_0594_419C_52FB78A08BEC",
  "this.overlay_695CE3AA_5E3E_0AB4_41D2_5C56B37E5173"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -133.11,
   "class": "AdjacentPanorama",
   "backwardYaw": -92.91,
   "panorama": "this.panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 4.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45CCF2BF_600D_14F6_41C1_A44F04E0FE14"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "13",
 "hfovMin": "150%",
 "id": "panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2",
 "overlays": [
  "this.panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_tcap0",
  "this.overlay_760E3547_5E76_0FFC_4186_BD445C90BACA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -121.8,
   "class": "AdjacentPanorama",
   "backwardYaw": 25.62,
   "panorama": "this.panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -154.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_463AA58B_600D_1C9F_41CA_4171E238223E"
},
{
 "initialPosition": {
  "yaw": 46.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_453B53E0_600D_1489_41D4_C11717BE14C8"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "05",
 "hfovMin": "150%",
 "id": "panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3",
 "overlays": [
  "this.panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_tcap0",
  "this.overlay_7E69972F_5E5A_0B8C_41C8_3B5BF195EC20",
  "this.overlay_7F95C6F6_5E5A_0A9D_41C0_B8CF5CDA9C40"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -41.9,
   "class": "AdjacentPanorama",
   "backwardYaw": -121.13,
   "panorama": "this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC",
   "distance": 1
  },
  {
   "yaw": 0.38,
   "class": "AdjacentPanorama",
   "backwardYaw": -164.24,
   "panorama": "this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_camera"
  },
  {
   "media": "this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_camera"
  },
  {
   "media": "this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_camera"
  },
  {
   "media": "this.panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_camera"
  },
  {
   "media": "this.panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_camera"
  },
  {
   "media": "this.panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_camera"
  },
  {
   "media": "this.panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_camera"
  },
  {
   "media": "this.panorama_469CF672_5DDE_0D95_41D7_421452AA0901",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_469CF672_5DDE_0D95_41D7_421452AA0901_camera"
  },
  {
   "media": "this.panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_camera"
  },
  {
   "media": "this.panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_camera"
  },
  {
   "media": "this.panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_camera"
  },
  {
   "media": "this.panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_camera"
  },
  {
   "media": "this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_camera"
  },
  {
   "media": "this.panorama_46B13751_5DDE_0B94_4196_3A62A847FFED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_camera"
  },
  {
   "media": "this.panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_camera"
  },
  {
   "media": "this.panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_camera"
  },
  {
   "media": "this.panorama_46944A79_5DDE_0594_41D5_0107C704739C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46944A79_5DDE_0594_41D5_0107C704739C_camera"
  },
  {
   "media": "this.panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_camera"
  },
  {
   "media": "this.panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_camera"
  },
  {
   "media": "this.panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_camera"
  },
  {
   "media": "this.panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_camera"
  },
  {
   "media": "this.panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 0)",
   "media": "this.album_67E9C3E0_5EF6_0AB5_41C1_5ACD3649EC1C",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -0.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_466105BC_600D_1CF9_41B1_485B39218DBC"
},
{
 "initialPosition": {
  "yaw": -2.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_452B13C0_600D_1489_41D1_EF2AB0EA3F3B"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_camera"
},
{
 "initialPosition": {
  "yaw": -0.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45E48310_600D_1589_41B4_F0B96FE67954"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46944A79_5DDE_0594_41D5_0107C704739C_camera"
},
{
 "initialPosition": {
  "yaw": 96.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45DC1300_600D_158A_41CE_E688576300F9"
},
{
 "initialPosition": {
  "yaw": -177.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_453333D1_600D_148B_41C8_943A9AFB136C"
},
{
 "initialPosition": {
  "yaw": 178.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_461B955A_600D_1DB9_41C6_37FEB59D94C6"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_7C442A81_603F_148B_41B4_E1F41EE330C2.ogg",
  "mp3Url": "media/audio_7C442A81_603F_148B_41B4_E1F41EE330C2.mp3"
 },
 "id": "audio_7C442A81_603F_148B_41B4_E1F41EE330C2",
 "data": {
  "label": "1625023844977-voicemaker.in-speech"
 }
},
{
 "initialPosition": {
  "yaw": -179.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_46DFE4F7_600D_1C77_41BC_6A7E66FBAD48"
},
{
 "initialPosition": {
  "yaw": -2.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4863D234_600D_178A_41D6_4E07CB72DEAB"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "16",
 "hfovMin": "150%",
 "id": "panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12",
 "overlays": [
  "this.panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_tcap0",
  "this.overlay_75D10AD7_5E5E_3A9C_41CB_EFFC88EE38B3",
  "this.overlay_733DF6F5_5E5E_0A9F_41D0_DB755C864377",
  "this.overlay_791DFA53_6003_178E_41B0_4E0FD84889BF",
  "this.popup_7C43E333_6005_358E_41B8_E345BD54DF91",
  "this.overlay_7C1F77AC_600F_1C99_41D0_26BFC11C7DD5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -70.89,
   "class": "AdjacentPanorama",
   "backwardYaw": 103.21,
   "panorama": "this.panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214",
   "distance": 1
  },
  {
   "yaw": 177.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 1.21,
   "panorama": "this.panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6F99B1E7_601C_F497_41D0_EE5800CB2D76_t.jpg",
 "id": "photo_6F99B1E7_601C_F497_41D0_EE5800CB2D76",
 "width": 2000,
 "label": "IMG_5431aaaaa",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_6F99B1E7_601C_F497_41D0_EE5800CB2D76.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1334
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_camera"
},
{
 "levels": [
  {
   "url": "media/popup_7C43E333_6005_358E_41B8_E345BD54DF91_0_0.jpg",
   "width": 3264,
   "class": "ImageResourceLevel",
   "height": 2448
  },
  {
   "url": "media/popup_7C43E333_6005_358E_41B8_E345BD54DF91_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_7C43E333_6005_358E_41B8_E345BD54DF91_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_7C43E333_6005_358E_41B8_E345BD54DF91_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "id": "ImageResource_7B107684_6005_1C89_41BA_AB4F8C504162",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 138.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45C8F2CF_600D_1496_41C2_F1BB08CB3E09"
},
{
 "initialPosition": {
  "yaw": 101.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_452553A0_600D_1489_41D4_D5A2EFC98F4D"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "09",
 "hfovMin": "150%",
 "id": "panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5",
 "overlays": [
  "this.panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_tcap0",
  "this.overlay_785DB903_5E7A_077B_4184_B8DAA33EE47B",
  "this.overlay_797F95AE_5E7A_0E8D_41C6_435803F4FCF7",
  "this.overlay_76419A1B_5E7E_0594_41C4_81B127BCC4A3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 81.69,
   "class": "AdjacentPanorama",
   "backwardYaw": 86.8,
   "panorama": "this.panorama_469CF672_5DDE_0D95_41D7_421452AA0901",
   "distance": 1
  },
  {
   "yaw": 1.21,
   "class": "AdjacentPanorama",
   "backwardYaw": 177.82,
   "panorama": "this.panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5",
   "distance": 1
  },
  {
   "yaw": 179.08,
   "class": "AdjacentPanorama",
   "backwardYaw": -78.67,
   "panorama": "this.panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_7ED6BE08_601F_6F9A_41C2_19BF17F9A73A.ogg",
  "mp3Url": "media/audio_7ED6BE08_601F_6F9A_41C2_19BF17F9A73A.mp3"
 },
 "id": "audio_7ED6BE08_601F_6F9A_41C2_19BF17F9A73A",
 "data": {
  "label": "bensound-betterdays"
 }
},
{
 "initialPosition": {
  "yaw": 58.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_457FD463_600D_138F_41D5_D500B98F0432"
},
{
 "initialPosition": {
  "yaw": 77.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_456C0443_600D_138F_41A7_5C65675BF12D"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_camera"
},
{
 "initialPosition": {
  "yaw": -76.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_467885DD_600D_1CBB_41A2_FB34172263F0"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "18",
 "hfovMin": "150%",
 "id": "panorama_46944A79_5DDE_0594_41D5_0107C704739C",
 "overlays": [
  "this.panorama_46944A79_5DDE_0594_41D5_0107C704739C_tcap0",
  "this.overlay_73AAE387_5E56_0B7B_41A8_77165CB306D7",
  "this.overlay_7169F0FB_5E2A_0694_4176_7D6EEC2F9016",
  "this.overlay_719030FE_5E2E_068C_41D1_3F319BA702B8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 92.24,
   "class": "AdjacentPanorama",
   "backwardYaw": -83.78,
   "panorama": "this.panorama_469CF672_5DDE_0D95_41D7_421452AA0901",
   "distance": 1
  },
  {
   "yaw": 179.08,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.83,
   "panorama": "this.panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4",
   "distance": 1
  },
  {
   "yaw": 2.22,
   "class": "AdjacentPanorama",
   "backwardYaw": 84.62,
   "panorama": "this.panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_camera"
},
{
 "initialPosition": {
  "yaw": -95.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45ED1320_600D_1589_41BF_D724137EC3A0"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "17",
 "hfovMin": "150%",
 "id": "panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214",
 "overlays": [
  "this.panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_tcap0",
  "this.overlay_729BCFB5_5E5E_3A9F_41CD_4EDD878EA509"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 103.21,
   "class": "AdjacentPanorama",
   "backwardYaw": -70.89,
   "panorama": "this.panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_t.jpg",
 "hfovMax": 130
},
{
 "viewerArea": "this.MainViewer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "initialPosition": {
  "yaw": 58.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_46870474_600D_1389_41D1_4FEBE50F21F2"
},
{
 "initialPosition": {
  "yaw": 87.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_46BC24C7_600D_1C97_41D3_6F3CAE45FC05"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "21",
 "hfovMin": "150%",
 "id": "panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4",
 "overlays": [
  "this.panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_tcap0",
  "this.overlay_71A49630_5E2A_0D94_419E_959E7DE95B09",
  "this.overlay_6F66DA7C_5E2A_058C_41AF_6F4EE54DE534",
  "this.overlay_6C87E98E_5E3E_068C_41CB_39124D1F47AE",
  "this.overlay_6CA3CC38_5E3D_FD94_41D6_376BC6CE1707",
  "this.overlay_6D007720_5E3A_0BB4_41C8_DC410DA76049",
  "this.overlay_6DCC397F_5E3A_078B_41D6_E5548EC733E8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 179.83,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.08,
   "panorama": "this.panorama_46944A79_5DDE_0594_41D5_0107C704739C",
   "distance": 1
  },
  {
   "yaw": -11.85,
   "class": "AdjacentPanorama",
   "backwardYaw": 175.31,
   "panorama": "this.panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 168.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45645432_600D_1389_41CD_216F644F78C3"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6FE48EFB_6003_2C7E_41CA_67135BE11B56_t.jpg",
 "id": "photo_6FE48EFB_6003_2C7E_41CA_67135BE11B56",
 "width": 2000,
 "label": "IMG_5338aaaa",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_6FE48EFB_6003_2C7E_41CA_67135BE11B56.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1334
},
{
 "initialPosition": {
  "yaw": -0.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45774453_600D_138F_41D0_B19E66DD1618"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "06",
 "hfovMin": "150%",
 "id": "panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B",
 "overlays": [
  "this.panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_tcap0",
  "this.overlay_7AAA92F9_5E6A_0A94_41B9_9BA457728233",
  "this.overlay_7BE500DE_5E6A_068D_41D2_F6EBB0A87760",
  "this.overlay_76BA7698_5E6A_0A94_41D4_179DDFC67DE0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -1.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.83,
   "panorama": "this.panorama_469CF672_5DDE_0D95_41D7_421452AA0901",
   "distance": 1
  },
  {
   "yaw": -148.01,
   "class": "AdjacentPanorama",
   "backwardYaw": 136.12,
   "panorama": "this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC",
   "distance": 1
  },
  {
   "yaw": 164,
   "class": "AdjacentPanorama",
   "backwardYaw": 9.25,
   "panorama": "this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "19",
 "hfovMin": "150%",
 "id": "panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C",
 "overlays": [
  "this.panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_tcap0",
  "this.overlay_70F7EB3F_5E2A_1B8C_41D3_8B7E7ACE31C5",
  "this.overlay_6F7B4A36_5E2E_059C_41C6_D4A84C49118E",
  "this.overlay_6E1E073E_5E2E_0B8D_41D5_E94782445151",
  "this.overlay_6E4C6574_5E2A_0F9C_41CE_63D561F03110"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 84.62,
   "class": "AdjacentPanorama",
   "backwardYaw": 2.22,
   "panorama": "this.panorama_46944A79_5DDE_0594_41D5_0107C704739C",
   "distance": 1
  },
  {
   "yaw": -92.91,
   "class": "AdjacentPanorama",
   "backwardYaw": -133.11,
   "panorama": "this.panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3",
   "distance": 1
  },
  {
   "yaw": -91.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -133.11,
   "panorama": "this.panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_camera"
},
{
 "initialPosition": {
  "yaw": -87.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_460DE539_600D_1DFB_41C9_D0531387E331"
},
{
 "initialPosition": {
  "yaw": -59.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45491401_600D_138B_41D7_E54A1B56DD78"
},
{
 "items": [
  {
   "media": "this.panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_camera"
  },
  {
   "media": "this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_camera"
  },
  {
   "media": "this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_camera"
  },
  {
   "media": "this.panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_camera"
  },
  {
   "media": "this.panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_camera"
  },
  {
   "media": "this.panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_camera"
  },
  {
   "media": "this.panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_camera"
  },
  {
   "media": "this.panorama_469CF672_5DDE_0D95_41D7_421452AA0901",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_469CF672_5DDE_0D95_41D7_421452AA0901_camera"
  },
  {
   "media": "this.panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_camera"
  },
  {
   "media": "this.panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_camera"
  },
  {
   "media": "this.panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_camera"
  },
  {
   "media": "this.panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_camera"
  },
  {
   "media": "this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_camera"
  },
  {
   "media": "this.panorama_46B13751_5DDE_0B94_4196_3A62A847FFED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_camera"
  },
  {
   "media": "this.panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_camera"
  },
  {
   "media": "this.panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_camera"
  },
  {
   "media": "this.panorama_46944A79_5DDE_0594_41D5_0107C704739C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46944A79_5DDE_0594_41D5_0107C704739C_camera"
  },
  {
   "media": "this.panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_camera"
  },
  {
   "media": "this.panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_camera"
  },
  {
   "media": "this.panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_camera"
  },
  {
   "media": "this.panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_camera"
  },
  {
   "media": "this.panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_camera"
  },
  {
   "media": "this.album_67E9C3E0_5EF6_0AB5_41C1_5ACD3649EC1C",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -90.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45F39340_600D_1589_41B8_143F415F00FD"
},
{
 "initialPosition": {
  "yaw": -94.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4631557A_600D_1C79_41D3_A1F82E44AD92"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_camera"
},
{
 "initialPosition": {
  "yaw": 50.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_46A434A6_600D_1C89_41B6_DA7F1C50EFDE"
},
{
 "initialPosition": {
  "yaw": -22.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_46F5F518_600D_1DB9_41D1_AD6605CAF4D3"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_6F991D63_601C_ED8F_41C5_0E93646D21C1_t.jpg",
 "id": "photo_6F991D63_601C_ED8F_41C5_0E93646D21C1",
 "width": 2000,
 "label": "IMG_5404aaaa",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_6F991D63_601C_ED8F_41C5_0E93646D21C1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1334
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "11",
 "hfovMin": "150%",
 "id": "panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04",
 "overlays": [
  "this.panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_tcap0",
  "this.overlay_79E5272C_5E7A_0B8C_41C5_0A9E0D632110",
  "this.overlay_79F4E449_5E7A_0DF7_41B1_DA8D1AC2C721",
  "this.overlay_76E7F253_5E76_0594_41B9_7A220480D68C",
  "this.overlay_76381C6A_5E76_7DB5_41C0_1CD16776FA2D",
  "this.overlay_76DD8766_5E76_0BBD_41D3_781F30EF1700",
  "this.overlay_77EA3E6E_5E6E_3D8C_41D1_659F4925774A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -78.67,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.08,
   "panorama": "this.panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5",
   "distance": 1
  },
  {
   "yaw": 25.62,
   "class": "AdjacentPanorama",
   "backwardYaw": -121.8,
   "panorama": "this.panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2",
   "distance": 1
  },
  {
   "yaw": 24.41,
   "class": "AdjacentPanorama",
   "backwardYaw": -121.8,
   "panorama": "this.panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2",
   "distance": 1
  },
  {
   "yaw": 89.47,
   "class": "AdjacentPanorama",
   "backwardYaw": -129.59,
   "panorama": "this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B",
   "distance": 1
  },
  {
   "yaw": -0.5,
   "class": "AdjacentPanorama",
   "backwardYaw": -129.59,
   "panorama": "this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B",
   "distance": 1
  },
  {
   "yaw": 91.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -129.59,
   "panorama": "this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 58.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4649F59B_600D_1CBF_41CB_00589C57B7F6"
},
{
 "initialPosition": {
  "yaw": 109.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_462D456A_600D_1D99_41D6_02AB34FFE0BA"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 5.31,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_7C43E333_6005_358E_41B8_E345BD54DF91",
 "popupDistance": 100,
 "popupMaxHeight": "50%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_7C43E333_6005_358E_41B8_E345BD54DF91_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 7.91,
 "hideEasing": "cubic_out",
 "yaw": -59.68,
 "popupMaxWidth": "50%"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "08",
 "hfovMin": "150%",
 "id": "panorama_469CF672_5DDE_0D95_41D7_421452AA0901",
 "overlays": [
  "this.panorama_469CF672_5DDE_0D95_41D7_421452AA0901_tcap0",
  "this.overlay_7BD2B66D_5E76_0D8C_41D5_B08118474E71",
  "this.overlay_7849B3B3_5E76_0A9B_41B3_0A35B76E7A2C",
  "this.overlay_79026B89_5E76_1B77_41C3_14C165B1B722",
  "this.overlay_734D91B7_5E5A_069C_41CC_7A441BE0C9F4",
  "this.overlay_71252DDE_5E56_3E8C_41D4_CA7B08A6E60F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 86.8,
   "class": "AdjacentPanorama",
   "backwardYaw": 81.69,
   "panorama": "this.panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5",
   "distance": 1
  },
  {
   "yaw": -83.78,
   "class": "AdjacentPanorama",
   "backwardYaw": 92.24,
   "panorama": "this.panorama_46944A79_5DDE_0594_41D5_0107C704739C",
   "distance": 1
  },
  {
   "yaw": -84.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 92.24,
   "panorama": "this.panorama_46944A79_5DDE_0594_41D5_0107C704739C",
   "distance": 1
  },
  {
   "yaw": 179.83,
   "class": "AdjacentPanorama",
   "backwardYaw": -1.05,
   "panorama": "this.panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 31.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_45CA42DF_600D_14B6_41B0_465C156D41DD"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "03",
 "hfovMin": "150%",
 "id": "panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088",
 "overlays": [
  "this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_tcap0",
  "this.overlay_7F080C3C_5E5A_7D8D_41BE_EDBA541DDD7B",
  "this.overlay_7C3BA9D1_5E5A_0697_41D5_BBE4327ED023",
  "this.overlay_7DA67E94_5E5A_7A9D_41D5_5BA629DB382F",
  "this.overlay_7C8BA428_5E5A_0DB5_41D2_97F821FA9539",
  "this.overlay_7AC8DF1D_5E6A_1B8C_41C2_0A8449A8FB7D",
  "this.overlay_41C3DEF3_6003_2C8E_41B3_425C4F70587A",
  "this.overlay_410C5AF1_6003_348A_41B6_8F2A0D1E0170",
  "this.overlay_43236BCE_6003_1499_41D0_88BA8E105953",
  "this.overlay_44E3E555_6003_3D8B_41C4_3A3A95A553BA",
  "this.overlay_42F3F3A9_60FD_149B_41C5_F10409D2BF4B",
  "this.overlay_43EECC59_60FD_33BA_41A1_2B59F4A7EA6A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -94.63,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.37,
   "panorama": "this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC",
   "distance": 1
  },
  {
   "yaw": 122.55,
   "class": "AdjacentPanorama",
   "backwardYaw": 156.34,
   "panorama": "this.panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB",
   "distance": 1
  },
  {
   "yaw": -164.24,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.38,
   "panorama": "this.panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3",
   "distance": 1
  },
  {
   "yaw": 9.25,
   "class": "AdjacentPanorama",
   "backwardYaw": 164,
   "panorama": "this.panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B",
   "distance": 1
  },
  {
   "yaw": -25.42,
   "class": "AdjacentPanorama",
   "backwardYaw": 157.72,
   "panorama": "this.panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_t.jpg",
 "hfovMax": 130
},
{
 "playList": "this.album_67E9C3E0_5EF6_0AB5_41C1_5ACD3649EC1C_AlbumPlayList",
 "thumbnailUrl": "media/album_67E9C3E0_5EF6_0AB5_41C1_5ACD3649EC1C_t.png",
 "id": "album_67E9C3E0_5EF6_0AB5_41C1_5ACD3649EC1C",
 "label": "Photo Album rajgad-farm-house-panhala-kolhapur-farm-house-on-hire-08yvvow8aa",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_camera"
},
{
 "initialPosition": {
  "yaw": -18.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_46C604D7_600D_1CB7_41C6_5FF8FCF0A0A0"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_4391F58A_5DD6_0F75_41D3_7A6D55E92E3A.ogg",
  "mp3Url": "media/audio_4391F58A_5DD6_0F75_41D3_7A6D55E92E3A.mp3"
 },
 "id": "audio_4391F58A_5DD6_0F75_41D3_7A6D55E92E3A",
 "data": {
  "label": "bab0c702-ecbf-4963-a794-5aed132630a2"
 }
},
{
 "initialPosition": {
  "yaw": 46.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_4540E3F0_600D_1489_41B9_FA629F0D6D02"
},
{
 "initialPosition": {
  "yaw": -16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_46E3E508_600D_1D99_41D2_25085D9424F3"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "22",
 "hfovMin": "150%",
 "id": "panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65",
 "overlays": [
  "this.panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_tcap0",
  "this.overlay_6F468E26_5E36_1DBD_41D2_0DD433246747",
  "this.overlay_6C2412E6_5E36_0ABD_41C1_F134E022AD64"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 175.31,
   "class": "AdjacentPanorama",
   "backwardYaw": -11.85,
   "panorama": "this.panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4",
   "distance": 1
  },
  {
   "yaw": 85.12,
   "class": "AdjacentPanorama",
   "backwardYaw": -102.04,
   "panorama": "this.panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_483C61FB_600D_147E_41C5_37C773D198D9",
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -178.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_478E25ED_600D_1C9B_41C0_D6009B0FE415"
},
{
 "initialPosition": {
  "yaw": 154.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_455E8422_600D_1389_41D4_6412267B6194"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "class": "ViewerArea",
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": 34,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "height": 140,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)"
},
{
 "horizontalAlign": "center",
 "maxWidth": 56,
 "id": "IconButton_7F499D96_6003_2C89_41C0_1BBD55C47F95",
 "backgroundOpacity": 0,
 "maxHeight": 55,
 "right": "2.35%",
 "width": 56,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": "3.83%",
 "height": 55,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_7F499D96_6003_2C89_41C0_1BBD55C47F95.png",
 "data": {
  "name": "IconButton7357"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0.55,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "class": "UIComponent",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent25750"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "class": "ZoomImage",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage25751"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "paddingRight": 5,
 "paddingLeft": 5,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton25752"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "inertia": true,
 "id": "panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.84,
   "yaw": -129.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04, this.camera_45F39340_600D_1589_41B8_143F415F00FD); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_70D6D05E_5E6A_058C_41D6_62F3B112039F",
   "pitch": -4.5,
   "hfov": 7.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -129.59,
   "distance": 100
  }
 ],
 "id": "overlay_760408C5_5E6A_06FC_41C9_1DB367192F02",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.86,
   "yaw": 120.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B13751_5DDE_0B94_4196_3A62A847FFED, this.camera_45EB1330_600D_1589_41D0_9B3A421A27F5); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_65F7A7D0_5E3A_0A95_41D6_1CAC956C12DE",
   "pitch": -2.99,
   "hfov": 7.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 120.88,
   "distance": 100
  }
 ],
 "id": "overlay_76A622C3_5E6A_0AF4_41D5_75952B83877A",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.11,
   "yaw": -15.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4854A311_60FF_758B_41C3_64F8BD32FE37",
   "pitch": 0.53,
   "hfov": 6.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -15.16,
   "distance": 100
  }
 ],
 "id": "overlay_6C57507B_5E3E_058B_41D6_1FB9F5E57D41",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.23,
   "yaw": -14.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0_HS_3_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0_HS_3_0.png",
      "width": 228,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.22,
   "hfov": 15.23,
   "yaw": -14.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6C57407B_5E3E_058B_41BF_5D4FDFCF899B",
 "data": {
  "label": "BEDROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.51,
   "yaw": 161.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0_HS_4_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0_HS_4_0.png",
      "width": 322,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46,
   "hfov": 21.51,
   "yaw": 161.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6ACA5C1E_5E3E_1D8D_41C0_96804708A518",
 "data": {
  "label": "BEDROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.6,
   "yaw": 156.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_48543311_60FF_758B_41D6_003130ED58DA",
   "pitch": 1.66,
   "hfov": 5.6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 156.17,
   "distance": 100
  }
 ],
 "id": "overlay_6B48512F_5E3E_078B_41C3_F70C9FA5BCE6",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "inertia": true,
 "id": "panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.42,
   "yaw": -102.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65, this.camera_4631557A_600D_1C79_41D3_A1F82E44AD92); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66A09DDC_5E36_3E8D_41A7_294A38E9A7E4",
   "pitch": -19.53,
   "hfov": 12.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -102.04,
   "distance": 100
  }
 ],
 "id": "overlay_6E9E33CD_5E36_0A8C_41CD_F5F8AF7F8F01",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "inertia": true,
 "id": "panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.34,
   "yaw": 157.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088, this.camera_455E8422_600D_1389_41D4_6412267B6194); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_762DC2F2_5E7A_0A94_41D2_4F70C3B9C852",
   "pitch": -11.87,
   "hfov": 16.34,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 157.72,
   "distance": 100
  }
 ],
 "id": "overlay_7DAF5171_5E6E_0794_41A3_C7AE707B07FB",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.25,
   "yaw": -175.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0_HS_1_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC, this.camera_45569411_600D_138B_41B5_8F9C342E20FF); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_762D72F2_5E7A_0A94_41C5_3C49C9E7161D",
   "pitch": -19.15,
   "hfov": 16.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -175.9,
   "distance": 100
  }
 ],
 "id": "overlay_7AA900DB_5E6E_0694_41CC_C3A72DDD3FE1",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "inertia": true,
 "id": "panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.58,
   "yaw": 156.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088, this.camera_46A834B6_600D_1C89_41C3_D2CBB071323B); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_78A3609A_5E56_0695_4180_FF040441A589",
   "pitch": -15.89,
   "hfov": 22.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 156.34,
   "distance": 100
  }
 ],
 "id": "overlay_7C447507_5E5A_0F7B_41C4_6C42EC802391",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.55,
   "yaw": -58.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4863830A_60FF_7599_41A4_9B694B0874DA",
   "pitch": -7.39,
   "hfov": 7.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -58.87,
   "distance": 100
  }
 ],
 "id": "overlay_7D3246C2_5E56_0AF5_412E_662FADFBE260",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.69,
   "yaw": 92.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0_HS_2_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0_HS_2_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.26,
   "hfov": 11.69,
   "yaw": 92.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7DEFA61A_5E56_0D95_4189_FB95AF43C2EA",
 "data": {
  "label": "GAZEBO"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.57,
   "yaw": 92.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4863030A_60FF_7599_41CF_1B66EFE0360E",
   "pitch": -6.13,
   "hfov": 7.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.11,
   "distance": 100
  }
 ],
 "id": "overlay_42E0C53D_6005_7DFA_41B1_8D6710FAA26E",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.6,
   "yaw": -58.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0_HS_4_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0_HS_4_0.png",
      "width": 195,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.26,
   "hfov": 12.6,
   "yaw": -58.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_428F5595_6005_1C8A_41D0_101BE16EA96E",
 "data": {
  "label": "GAZEBO"
 }
},
{
 "inertia": true,
 "id": "panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.52,
   "yaw": 1.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12, this.camera_452B13C0_600D_1489_41D1_EF2AB0EA3F3B); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6CA4C005_5E5E_057F_41D1_2B311D5EF2CC",
   "pitch": -29.07,
   "hfov": 11.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.21,
   "distance": 100
  }
 ],
 "id": "overlay_7503BD04_5E5A_1F7D_41CA_F01DDB4D5ED7",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.43,
   "yaw": 177.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0_HS_1_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5, this.camera_452D43B0_600D_1489_4194_6445AD91375E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6CA49005_5E5E_057F_41D0_AB20B7C4681B",
   "pitch": -29.83,
   "hfov": 11.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 177.82,
   "distance": 100
  }
 ],
 "id": "overlay_72468296_5E5E_0A9C_4177_E798A31DF034",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.63,
   "yaw": 66.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0_HS_2_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0_HS_2_0.png",
      "width": 360,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49,
   "hfov": 23.63,
   "yaw": 66.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6C73DD60_5E3A_1FB5_41D2_96D045773B9A",
 "data": {
  "label": "LIVING ROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.86,
   "yaw": 66.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_65FB47D0_5E3A_0A95_41A8_0F349EB4A64A",
   "pitch": -2.87,
   "hfov": 8.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 66.61,
   "distance": 100
  }
 ],
 "id": "overlay_6C8BDB9F_5E3A_7A8B_41D2_49C8A9AFEBBB",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.87,
   "yaw": -96.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_65FA87D0_5E3A_0A95_41CF_8C6A2BF054DF",
   "pitch": 1.15,
   "hfov": 8.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -96.93,
   "distance": 100
  }
 ],
 "id": "overlay_6CA09254_5E3A_059C_41CD_39B021CDF50E",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.98,
   "yaw": -96.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0_HS_5_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0_HS_5_0.png",
      "width": 360,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.22,
   "hfov": 23.98,
   "yaw": -96.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6D7B0975_5E3A_079F_41D1_48751836FCBC",
 "data": {
  "label": "LIVING ROOM"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "class": "ViewerArea",
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "right": 10,
 "width": "5.17%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "propagateClick": true,
 "top": "45.9%",
 "bottom": "45.9%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "5.17%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "propagateClick": true,
 "top": "45.9%",
 "bottom": "45.9%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "inertia": true,
 "id": "panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.3,
   "yaw": 177.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_1_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC, this.camera_48589223_600D_178E_41BC_8EC9B71F0721); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7AF41376_5E56_0B9D_41D5_24A9D26AAD55",
   "pitch": -13.12,
   "hfov": 14.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 177.83,
   "distance": 100
  }
 ],
 "id": "overlay_41DA143A_5E2A_0D94_41D7_25EBD2A5610C",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "inertia": true,
 "id": "panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.85,
   "yaw": -175.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B, this.camera_45491401_600D_138B_41D7_E54A1B56DD78); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_70D9E05E_5E6A_058C_41AE_412CA468F594",
   "pitch": -3.24,
   "hfov": 7.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -175.82,
   "distance": 100
  }
 ],
 "id": "overlay_76AD9CF8_5E6A_1E94_41C0_77837E562B1E",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "id": "panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.38,
   "yaw": -16.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071, this.camera_4863D234_600D_178A_41D6_4E07CB72DEAB); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7C630921_5E56_07B7_41B7_A992F4857CDB",
   "pitch": -24.43,
   "hfov": 21.38,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -16.75,
   "distance": 100
  }
 ],
 "id": "overlay_41C81315_5E56_0B9C_41D4_C8E09D35A11D",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.35,
   "yaw": -121.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_1_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3, this.camera_45C8F2CF_600D_1496_41C2_F1BB08CB3E09); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_771AEF09_5E6A_1B77_41CA_268A24F7D11E",
   "pitch": -11.99,
   "hfov": 15.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -121.13,
   "distance": 100
  }
 ],
 "id": "overlay_7E868F0B_5E5E_1B74_41D7_6B3FFBC93998",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.75,
   "yaw": 161.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_2_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088, this.camera_45D0C2F0_600D_148A_41C0_77A282ED013B); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7410C37F_5E6E_0B8B_41A3_1FAE2807556F",
   "pitch": -15.51,
   "hfov": 18.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 161.37,
   "distance": 100
  }
 ],
 "id": "overlay_741A6DFC_5E6A_3E8C_41D2_A0650A7E9D34",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.09,
   "yaw": 112.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_3_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732, this.camera_45CCF2BF_600D_14F6_41C1_A44F04E0FE14); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7410937F_5E6E_0B8B_41C2_1658C19D9FDD",
   "pitch": -11.24,
   "hfov": 19.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 112.38,
   "distance": 100
  }
 ],
 "id": "overlay_7DDDC238_5E6A_0594_41C5_8426D7FD862E",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.89,
   "yaw": 136.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_4_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B, this.camera_45CA42DF_600D_14B6_41B0_465C156D41DD); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_762872E2_5E7A_0AB5_41CD_12841AE7C700",
   "pitch": -11.99,
   "hfov": 12.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 136.12,
   "distance": 100
  }
 ],
 "id": "overlay_7A6A5815_5E6A_059F_41B7_248FBC5A6D91",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.88,
   "yaw": 112.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_5_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_5_0.png",
      "width": 195,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.73,
   "hfov": 12.88,
   "yaw": 112.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_42537D36_60FD_ED89_41B9_CDEC3D33C964",
 "data": {
  "label": "PARKING"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.34,
   "yaw": -120.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_48672307_60FF_7597_41CC_DC146A6DCF50",
   "pitch": -4.75,
   "hfov": 5.34,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -120.55,
   "distance": 100
  }
 ],
 "id": "overlay_42EB738C_60FD_3499_4192_B5058C80A2F3",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.35,
   "yaw": 111.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_48675307_60FF_7597_41D3_EFFD86941436",
   "pitch": -2.74,
   "hfov": 5.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 111.83,
   "distance": 100
  }
 ],
 "id": "overlay_43E58C4D_60FC_F39B_41D0_1251CE69E11B",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.86,
   "yaw": -120.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_8_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_8_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.49,
   "hfov": 11.86,
   "yaw": -120.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_42E7DE30_60FF_2F8A_41C8_44FA8A26B0B2",
 "data": {
  "label": "GARDEN"
 }
},
{
 "inertia": true,
 "id": "panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.86,
   "yaw": -133.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C, this.camera_46BC24C7_600D_1C97_41D3_6F3CAE45FC05); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66648D70_5E2F_FF94_41D3_BE1611053F28",
   "pitch": -2.99,
   "hfov": 7.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -133.11,
   "distance": 100
  }
 ],
 "id": "overlay_715F870A_5E2E_0B75_41C5_A4D3A7CB6139",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.6,
   "yaw": 155.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_48511315_60FF_758B_41D5_0086FFE2DC06",
   "pitch": 3.16,
   "hfov": 6.6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 155.17,
   "distance": 100
  }
 ],
 "id": "overlay_6CBB503F_5E36_058C_41CC_3D9CB339518D",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.54,
   "yaw": 156.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0_HS_2_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0_HS_2_0.png",
      "width": 232,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96,
   "hfov": 15.54,
   "yaw": 156.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6CBB203F_5E36_058C_41D5_8DEF788FF34B",
 "data": {
  "label": "BEDROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.48,
   "yaw": 60.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0_HS_3_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0_HS_3_0.png",
      "width": 232,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.22,
   "hfov": 15.48,
   "yaw": 60.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_68ED2213_5E3E_0594_419C_52FB78A08BEC",
 "data": {
  "label": "BEDROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.11,
   "yaw": 59.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_484EF315_60FF_758B_41D5_10B1A19BA142",
   "pitch": 1.03,
   "hfov": 6.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 59.71,
   "distance": 100
  }
 ],
 "id": "overlay_695CE3AA_5E3E_0AB4_41D2_5C56B37E5173",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "inertia": true,
 "id": "panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.87,
   "yaw": -121.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04, this.camera_463AA58B_600D_1C9F_41CA_4171E238223E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_70D6005E_5E6A_058C_41D4_75F3D5D84172",
   "pitch": 0.02,
   "hfov": 7.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -121.8,
   "distance": 100
  }
 ],
 "id": "overlay_760E3547_5E76_0FFC_4186_BD445C90BACA",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "id": "panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.39,
   "yaw": -41.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC, this.camera_4649F59B_600D_1CBF_41CB_00589C57B7F6); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_762B32F2_5E7A_0A94_41A5_FD745B45E112",
   "pitch": -14.9,
   "hfov": 11.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -41.9,
   "distance": 100
  }
 ],
 "id": "overlay_7E69972F_5E5A_0B8C_41C8_3B5BF195EC20",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.75,
   "yaw": 0.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0_HS_1_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088, this.camera_465CC5AC_600D_1C99_41D4_B4D72EA7950E); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_762B42F2_5E7A_0A94_41B2_E79024368A16",
   "pitch": -15.48,
   "hfov": 9.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.38,
   "distance": 100
  }
 ],
 "id": "overlay_7F95C6F6_5E5A_0A9D_41C0_B8CF5CDA9C40",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "inertia": true,
 "id": "panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.79,
   "yaw": -70.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "rollOver": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 14, this.audio_7C442A81_603F_148B_41B4_E1F41EE330C2)",
   "click": "this.startPanoramaWithCamera(this.panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214, this.camera_467885DD_600D_1CBB_41A2_FB34172263F0); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6C983005_5E5E_057F_41B4_2A8F9A414A0A",
   "pitch": -26.56,
   "hfov": 11.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -70.89,
   "distance": 100
  }
 ],
 "id": "overlay_75D10AD7_5E5E_3A9C_41CB_EFFC88EE38B3",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.34,
   "yaw": 177.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0_HS_1_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5, this.camera_478E25ED_600D_1C9B_41C0_D6009B0FE415); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6C989005_5E5E_057F_41C3_9AF8BC10B395",
   "pitch": -20.53,
   "hfov": 12.34,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 177.57,
   "distance": 100
  }
 ],
 "id": "overlay_733DF6F5_5E5E_0A9F_41D0_DB755C864377",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.58,
   "yaw": -51.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0_HS_3_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "rollOver": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 14, this.audio_7C442A81_603F_148B_41B4_E1F41EE330C2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0_HS_3_0.png",
      "width": 352,
      "class": "ImageResourceLevel",
      "height": 175
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.56,
   "hfov": 23.58,
   "yaw": -51.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_791DFA53_6003_178E_41B0_4E0FD84889BF",
 "data": {
  "label": "JOTIBA TEMPLE IS AT A DISTANCE OF 8 KM. FROM THIS LOCATION."
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.31,
   "yaw": -59.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "rollOver": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 14, this.audio_7C442A81_603F_148B_41B4_E1F41EE330C2)",
   "click": "this.showPopupPanoramaOverlay(this.popup_7C43E333_6005_358E_41B8_E345BD54DF91, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_7B107684_6005_1C89_41BA_AB4F8C504162, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0_HS_5_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.91,
   "yaw": -59.68
  }
 ],
 "id": "overlay_7C1F77AC_600F_1C99_41D0_26BFC11C7DD5",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "inertia": true,
 "id": "panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.87,
   "yaw": 81.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_469CF672_5DDE_0D95_41D7_421452AA0901, this.camera_45178380_600D_1489_41C5_8E5130F01946); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_737AAC7E_5E7E_7D8C_41A8_DD19FBC6741D",
   "pitch": -0.23,
   "hfov": 7.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 81.69,
   "distance": 100
  }
 ],
 "id": "overlay_785DB903_5E7A_077B_4184_B8DAA33EE47B",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.03,
   "yaw": 179.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0_HS_1_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04, this.camera_452553A0_600D_1489_41D4_D5A2EFC98F4D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_737A9C7E_5E7E_7D8C_41D5_C026B3BBB2A8",
   "pitch": -8.73,
   "hfov": 13.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 179.08,
   "distance": 100
  }
 ],
 "id": "overlay_797F95AE_5E7A_0E8D_41C6_435803F4FCF7",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.52,
   "yaw": 1.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0_HS_2_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5, this.camera_451FA390_600D_1489_41CB_59C94053C2CC); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_70D4605E_5E6A_058C_41B6_577C3919FFC9",
   "pitch": -29.07,
   "hfov": 11.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.21,
   "distance": 100
  }
 ],
 "id": "overlay_76419A1B_5E7E_0594_41C4_81B127BCC4A3",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "inertia": true,
 "id": "panorama_46944A79_5DDE_0594_41D5_0107C704739C_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.87,
   "yaw": 92.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_469CF672_5DDE_0D95_41D7_421452AA0901, this.camera_45DC1300_600D_158A_41CE_E688576300F9); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6DA06AC3_5E56_7AF4_41AE_A326951AD541",
   "pitch": -0.23,
   "hfov": 7.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.24,
   "distance": 100
  }
 ],
 "id": "overlay_73AAE387_5E56_0B7B_41A8_77165CB306D7",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.81,
   "yaw": 179.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0_HS_2_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4, this.camera_45E48310_600D_1589_41B4_F0B96FE67954); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6667DD70_5E2F_FF94_417C_7E5759FC00C6",
   "pitch": -26.31,
   "hfov": 11.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 179.08,
   "distance": 100
  }
 ],
 "id": "overlay_7169F0FB_5E2A_0694_4176_7D6EEC2F9016",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.04,
   "yaw": 2.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0_HS_3_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C, this.camera_45ED1320_600D_1589_41BF_D724137EC3A0); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6D1319CA_5E2A_06F5_41C5_AB6EBEB08F78",
   "pitch": -8.22,
   "hfov": 13.04,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.22,
   "distance": 100
  }
 ],
 "id": "overlay_719030FE_5E2E_068C_41D1_3F319BA702B8",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "inertia": true,
 "id": "panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.84,
   "yaw": 103.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12, this.camera_462D456A_600D_1D99_41D6_02AB34FFE0BA); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6C9F7005_5E5E_057F_41CC_BFA847B402F7",
   "pitch": -26.06,
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 103.21,
   "distance": 100
  }
 ],
 "id": "overlay_729BCFB5_5E5E_3A9F_41CD_4EDD878EA509",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "inertia": true,
 "id": "panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.13,
   "yaw": 179.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46944A79_5DDE_0594_41D5_0107C704739C, this.camera_466105BC_600D_1CF9_41B1_485B39218DBC); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66A2ADDC_5E36_3E8D_41D6_571493BFD224",
   "pitch": -32.34,
   "hfov": 11.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 179.83,
   "distance": 100
  }
 ],
 "id": "overlay_71A49630_5E2A_0D94_419E_959E7DE95B09",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.55,
   "yaw": -11.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0_HS_1_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65, this.camera_4677E5CC_600D_1C99_416F_4ADD56B38D03); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66A10DDC_5E36_3E8D_41BF_D47A70299B60",
   "pitch": -28.82,
   "hfov": 11.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -11.85,
   "distance": 100
  }
 ],
 "id": "overlay_6F66DA7C_5E2A_058C_41AF_6F4EE54DE534",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.85,
   "yaw": -67.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0_HS_2_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0_HS_2_0.png",
      "width": 360,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.48,
   "hfov": 23.85,
   "yaw": -67.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6C87E98E_5E3E_068C_41CB_39124D1F47AE",
 "data": {
  "label": "LIVING ROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.85,
   "yaw": 90.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_658C87E0_5E3A_0AB5_41C5_5645812CD5E0",
   "pitch": 4.17,
   "hfov": 8.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 90.98,
   "distance": 100
  }
 ],
 "id": "overlay_6CA3CC38_5E3D_FD94_41D6_376BC6CE1707",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.87,
   "yaw": -68.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_658CD7E0_5E3A_0AB5_41D3_2E7B4F761227",
   "pitch": 0.15,
   "hfov": 8.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -68.54,
   "distance": 100
  }
 ],
 "id": "overlay_6D007720_5E3A_0BB4_41C8_DC410DA76049",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.07,
   "yaw": 92.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0_HS_5_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0_HS_5_0.png",
      "width": 360,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71,
   "hfov": 24.07,
   "yaw": 92.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6DCC397F_5E3A_078B_41D6_E5548EC733E8",
 "data": {
  "label": "LIVING ROOM"
 }
},
{
 "inertia": true,
 "id": "panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.23,
   "yaw": 164,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088, this.camera_450F7370_600D_1589_41C9_F664BD12404A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_667EDFE4_5E2A_1ABC_41D3_382CA0461998",
   "pitch": -31.59,
   "hfov": 11.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 164,
   "distance": 100
  }
 ],
 "id": "overlay_7AAA92F9_5E6A_0A94_41B9_9BA457728233",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.4,
   "yaw": -148.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0_HS_1_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC, this.camera_4501A361_600D_158B_41D6_78D22C131977); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_762C12F2_5E7A_0A94_4191_0666DF9D66E2",
   "pitch": -30.08,
   "hfov": 11.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -148.01,
   "distance": 100
  }
 ],
 "id": "overlay_7BE500DE_5E6A_068D_41D2_F6EBB0A87760",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.76,
   "yaw": -1.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0_HS_2_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_469CF672_5DDE_0D95_41D7_421452AA0901, this.camera_45F97351_600D_158B_41AB_B3E11F4EE615); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_762C42F2_5E7A_0A94_41B3_6855823160F4",
   "pitch": -14.5,
   "hfov": 12.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.05,
   "distance": 100
  }
 ],
 "id": "overlay_76BA7698_5E6A_0A94_41D4_179DDFC67DE0",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "inertia": true,
 "id": "panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.79,
   "yaw": -92.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3, this.camera_453B53E0_600D_1489_41D4_C11717BE14C8); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66674D70_5E2F_FF94_41CE_6E13CB250689",
   "pitch": 8.06,
   "hfov": 7.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.91,
   "distance": 100
  }
 ],
 "id": "overlay_70F7EB3F_5E2A_1B8C_41D3_8B7E7ACE31C5",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.79,
   "yaw": -91.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0_HS_1_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3, this.camera_4540E3F0_600D_1489_41B9_FA629F0D6D02); this.mainPlayList.set('selectedIndex', 12); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0_HS_1_0.png",
      "width": 371,
      "class": "ImageResourceLevel",
      "height": 292
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.58,
   "hfov": 24.79,
   "yaw": -91.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6F7B4A36_5E2E_059C_41C6_D4A84C49118E",
 "data": {
  "label": "\u000d\u000dBEDROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.31,
   "yaw": 0.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0_HS_2_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0_HS_2_0.png",
      "width": 348,
      "class": "ImageResourceLevel",
      "height": 292
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96,
   "hfov": 23.31,
   "yaw": 0.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6E1E073E_5E2E_0B8D_41D5_E94782445151",
 "data": {
  "label": "\u000d\u000dWASHROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.95,
   "yaw": 84.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0_HS_3_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46944A79_5DDE_0594_41D5_0107C704739C, this.camera_453333D1_600D_148B_41C8_943A9AFB136C); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6D1DB9CA_5E2A_06F5_41B1_B69F3BBC8CEA",
   "pitch": -33.85,
   "hfov": 10.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 84.62,
   "distance": 100
  }
 ],
 "id": "overlay_6E4C6574_5E2A_0F9C_41CE_63D561F03110",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "inertia": true,
 "id": "panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.78,
   "yaw": 89.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B, this.camera_468E5485_600D_1C8B_41A1_75DF1EC45FC9); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_70D4D05E_5E6A_058C_41C8_DD0C9838B680",
   "pitch": 8.31,
   "hfov": 7.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.47,
   "distance": 100
  }
 ],
 "id": "overlay_79E5272C_5E7A_0B8C_41C5_0A9E0D632110",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.3,
   "yaw": -0.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0_HS_1_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B, this.camera_46925496_600D_1C89_41CB_18908AC69306); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0_HS_1_0.png",
      "width": 348,
      "class": "ImageResourceLevel",
      "height": 292
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.21,
   "hfov": 23.3,
   "yaw": -0.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_79F4E449_5E7A_0DF7_41B1_DA8D1AC2C721",
 "data": {
  "label": "\u000d\u000dWASHROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.21,
   "yaw": 25.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0_HS_2_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2, this.camera_457FD463_600D_138F_41D5_D500B98F0432); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0_HS_2_0.png",
      "width": 333,
      "class": "ImageResourceLevel",
      "height": 292
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.72,
   "hfov": 22.21,
   "yaw": 25.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_76E7F253_5E76_0594_41B9_7A220480D68C",
 "data": {
  "label": "\u000d\u000dBATHROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.82,
   "yaw": 91.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0_HS_3_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B, this.camera_46A434A6_600D_1C89_41B6_DA7F1C50EFDE); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0_HS_3_0.png",
      "width": 371,
      "class": "ImageResourceLevel",
      "height": 292
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.83,
   "hfov": 24.82,
   "yaw": 91.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_76381C6A_5E76_7DB5_41C0_1CD16776FA2D",
 "data": {
  "label": "\u000d\u000dBEDROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.87,
   "yaw": 24.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2, this.camera_46870474_600D_1389_41D1_4FEBE50F21F2); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_70D7B05E_5E6A_058C_41D0_FA30B640775A",
   "pitch": -0.73,
   "hfov": 7.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 24.41,
   "distance": 100
  }
 ],
 "id": "overlay_76DD8766_5E76_0BBD_41D3_781F30EF1700",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.49,
   "yaw": -78.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0_HS_5_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5, this.camera_45774453_600D_138F_41D0_B19E66DD1618); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_72FFFFD7_5E6D_FA9B_41C0_2A9A7A92C9B9",
   "pitch": -29.33,
   "hfov": 11.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -78.67,
   "distance": 100
  }
 ],
 "id": "overlay_77EA3E6E_5E6E_3D8C_41D1_659F4925774A",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "inertia": true,
 "id": "panorama_469CF672_5DDE_0D95_41D7_421452AA0901_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.57,
   "yaw": 179.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B, this.camera_461B955A_600D_1DB9_41C6_37FEB59D94C6); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_762E92F2_5E7A_0A94_417A_DF4CF96FC4DA",
   "pitch": -28.57,
   "hfov": 11.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 179.83,
   "distance": 100
  }
 ],
 "id": "overlay_7BD2B66D_5E76_0D8C_41D5_B08118474E71",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.83,
   "yaw": 86.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_762ED2F2_5E7A_0A94_41B9_28BEBC12BEB8",
   "pitch": 5.3,
   "hfov": 7.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 86.46,
   "distance": 100
  }
 ],
 "id": "overlay_7849B3B3_5E76_0A9B_41B3_0A35B76E7A2C",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.64,
   "yaw": -83.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0_HS_2_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46944A79_5DDE_0594_41D5_0107C704739C, this.camera_460DE539_600D_1DFB_41C9_D0531387E331); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0_HS_2_0.png",
      "width": 442,
      "class": "ImageResourceLevel",
      "height": 292
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.07,
   "hfov": 29.64,
   "yaw": -83.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_79026B89_5E76_1B77_41C3_14C165B1B722",
 "data": {
  "label": "\u000d\u000dLIVING ROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.64,
   "yaw": 86.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0_HS_3_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5, this.camera_46F9A529_600D_1D9B_41BC_7D5B12E074C2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0_HS_3_0.png",
      "width": 442,
      "class": "ImageResourceLevel",
      "height": 292
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.57,
   "hfov": 29.64,
   "yaw": 86.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_734D91B7_5E5A_069C_41CC_7A441BE0C9F4",
 "data": {
  "label": "\u000d\u000dLIVING ROOM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.84,
   "yaw": -84.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46944A79_5DDE_0594_41D5_0107C704739C, this.camera_46178549_600D_1D9B_41D3_BEFD0832CC3A); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6DA67AB3_5E56_7A9B_41C8_24832F8DB110",
   "pitch": 4.29,
   "hfov": 7.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -84.87,
   "distance": 100
  }
 ],
 "id": "overlay_71252DDE_5E56_3E8C_41D4_CA7B08A6E60F",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": true,
 "id": "panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.11,
   "yaw": -164.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3, this.camera_46DFE4F7_600D_1C77_41BC_6A7E66FBAD48); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_762992E2_5E7A_0AB5_419F_5D5453D5DF0C",
   "pitch": -12.12,
   "hfov": 14.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -164.24,
   "distance": 100
  }
 ],
 "id": "overlay_7F080C3C_5E5A_7D8D_41BE_EDBA541DDD7B",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.32,
   "yaw": -94.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_1_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC, this.camera_46C604D7_600D_1CB7_41C6_5FF8FCF0A0A0); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7629C2E2_5E7A_0AB5_41D2_6984A31A816B",
   "pitch": -16.51,
   "hfov": 14.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -94.63,
   "distance": 100
  }
 ],
 "id": "overlay_7C3BA9D1_5E5A_0697_41D5_BBE4327ED023",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.91,
   "yaw": -25.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_2_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732, this.camera_46F5F518_600D_1DB9_41D1_AD6605CAF4D3); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_762962F2_5E7A_0A94_41D4_5AD8B737CD18",
   "pitch": -11.49,
   "hfov": 12.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -25.42,
   "distance": 100
  }
 ],
 "id": "overlay_7DA67E94_5E5A_7A9D_41D5_5BA629DB382F",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.74,
   "yaw": 122.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_3_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB, this.camera_46CA04E7_600D_1C97_41C6_0154F4C721FE); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_762AA2F2_5E7A_0A94_41A6_DC877F210D10",
   "pitch": -20.66,
   "hfov": 13.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 122.55,
   "distance": 100
  }
 ],
 "id": "overlay_7C8BA428_5E5A_0DB5_41D2_97F821FA9539",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.79,
   "yaw": 9.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_4_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B, this.camera_46E3E508_600D_1D99_41D2_25085D9424F3); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_762AC2F2_5E7A_0A94_41D6_5844652014A9",
   "pitch": -26.56,
   "hfov": 11.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 9.25,
   "distance": 100
  }
 ],
 "id": "overlay_7AC8DF1D_5E6A_1B8C_41C2_0A8449A8FB7D",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.34,
   "yaw": -163.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_48653309_60FF_759B_41AA_38C6176C73AB",
   "pitch": -5,
   "hfov": 5.34,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -163.76,
   "distance": 100
  }
 ],
 "id": "overlay_41C3DEF3_6003_2C8E_41B3_425C4F70587A",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.94,
   "yaw": 124.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_6_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_6_0.png",
      "width": 183,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.01,
   "hfov": 11.94,
   "yaw": 124.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_410C5AF1_6003_348A_41B6_8F2A0D1E0170",
 "data": {
  "label": "GAZEBO"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.84,
   "yaw": -163.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_7_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_7_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.99,
   "hfov": 11.84,
   "yaw": -163.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_43236BCE_6003_1499_41D0_88BA8E105953",
 "data": {
  "label": "GARDEN"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.35,
   "yaw": -26.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_48629309_60FF_759B_41AD_73C2F17F0A1B",
   "pitch": -1.99,
   "hfov": 5.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -26.09,
   "distance": 100
  }
 ],
 "id": "overlay_44E3E555_6003_3D8B_41C4_3A3A95A553BA",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.31,
   "yaw": 124.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4862E309_60FF_759B_41B8_ED004BC18B75",
   "pitch": -7.51,
   "hfov": 5.31,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 124.39,
   "distance": 100
  }
 ],
 "id": "overlay_42F3F3A9_60FD_149B_41C5_F10409D2BF4B",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.93,
   "yaw": -25.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_10_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_10_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.23,
   "hfov": 11.93,
   "yaw": -25.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_43EECC59_60FD_33BA_41A1_2B59F4A7EA6A",
 "data": {
  "label": "PARKING"
 }
},
{
 "items": [
  {
   "media": "this.photo_6FA31CB9_6003_2CFB_41D6_2BF1A107599F",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.68",
     "class": "PhotoCameraPosition",
     "y": "0.67",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.photo_6FE48EFB_6003_2C7E_41CA_67135BE11B56",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "y": "0.35",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.photo_6F9E815C_6003_15BA_41C0_8857CD194E44",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "y": "0.65",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.photo_6F832360_6003_1589_41A0_F358589140C6",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.58",
     "class": "PhotoCameraPosition",
     "y": "0.55",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.photo_6F9CD583_6003_1C8F_41C0_333DEAD0B5A8",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "y": "0.35",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.photo_6F9C36FA_6003_1C79_4194_7474C8017612",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.55",
     "class": "PhotoCameraPosition",
     "y": "0.44",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.photo_6F9C98AF_6003_1496_41D5_65056FA55532",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.40",
     "class": "PhotoCameraPosition",
     "y": "0.64",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.photo_6F991D63_601C_ED8F_41C5_0E93646D21C1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "y": "0.52",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.photo_6F9A9FD4_601C_EC89_41D7_151852924487",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.68",
     "class": "PhotoCameraPosition",
     "y": "0.69",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.photo_6F99B1E7_601C_F497_41D0_EE5800CB2D76",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.75",
     "class": "PhotoCameraPosition",
     "y": "0.66",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_67E9C3E0_5EF6_0AB5_41C1_5ACD3649EC1C_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "inertia": true,
 "id": "panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_tcap0",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 19.5,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.06,
   "yaw": 85.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA, this.camera_456C0443_600D_138F_41A7_5C65675BF12D); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66A18DDC_5E36_3E8D_4192_4F95C2604488",
   "pitch": -23.8,
   "hfov": 12.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 85.12,
   "distance": 100
  }
 ],
 "id": "overlay_6F468E26_5E36_1DBD_41D2_0DD433246747",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.44,
   "yaw": 175.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0_HS_1_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4, this.camera_45645432_600D_1389_41CD_216F644F78C3); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66A1EDDC_5E36_3E8D_41D4_5ED180B49A8A",
   "pitch": -19.28,
   "hfov": 12.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 175.31,
   "distance": 100
  }
 ],
 "id": "overlay_6C2412E6_5E36_0ABD_41C1_F134E022AD64",
 "data": {
  "label": "Arrow 03b"
 }
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "backgroundOpacity": 0.7,
 "width": 300,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Image_7612E3D2_6003_3489_41D5_0AC2AFA18746",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 40,
 "paddingLeft": 40,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 366,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "top": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 78,
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "white block"
 },
 "shadowBlurRadius": 8,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "width": 366,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0.01
 ],
 "propagateClick": true,
 "top": 86,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 46,
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "visible": false,
 "data": {
  "name": "blue block"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "width": 391,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "LOREM IPSUM",
 "minHeight": 1,
 "propagateClick": true,
 "top": 0,
 "verticalAlign": "top",
 "height": 75,
 "minWidth": 1,
 "fontSize": 61,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "data": {
  "name": "text 1"
 },
 "shadow": false,
 "visible": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#000000"
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "width": 385,
 "textShadowColor": "#000000",
 "backgroundOpacity": 0,
 "textShadowVerticalLength": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "minHeight": 1,
 "propagateClick": true,
 "top": 90,
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "height": 44,
 "minWidth": 1,
 "fontSize": 28,
 "class": "Label",
 "paddingTop": 0,
 "textShadowHorizontalLength": 0,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "data": {
  "name": "text 2"
 },
 "shadow": false,
 "visible": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "children": [
  "this.Image_68C0E19E_5EFA_068C_41CC_D99DD05275DA",
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_70D6D05E_5E6A_058C_41D6_62F3B112039F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_65F7A7D0_5E3A_0A95_41D6_1CAC956C12DE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0_HS_2_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_4854A311_60FF_758B_41C3_64F8BD32FE37",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46999C45_5DDE_3DFC_41BD_31EF07CB3D0B_0_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_48543311_60FF_758B_41D6_003130ED58DA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B14448_5DDE_0DF5_41D0_CE5DA6B9FFDA_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_66A09DDC_5E36_3E8D_41A7_294A38E9A7E4",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_762DC2F2_5E7A_0A94_41D2_4F70C3B9C852",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B13ACA_5DDE_1AF5_41C9_F5C69E691732_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_762D72F2_5E7A_0A94_41C5_3C49C9E7161D",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_78A3609A_5E56_0695_4180_FF040441A589",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0_HS_1_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_4863830A_60FF_7599_41A4_9B694B0874DA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46971716_5DDE_0B9C_41C2_A1626F3DADFB_0_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_4863030A_60FF_7599_41CF_1B66EFE0360E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6CA4C005_5E5E_057F_41D1_2B311D5EF2CC",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6CA49005_5E5E_057F_41D0_AB20B7C4681B",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_65FB47D0_5E3A_0A95_41A8_0F349EB4A64A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_469C3E50_5DDE_1D94_41AA_098FCF6145A5_0_HS_4_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_65FA87D0_5E3A_0A95_41CF_8C6A2BF054DF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_462B3D28_5DDE_7FB4_41B2_9C8A28CEC071_1_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_7AF41376_5E56_0B9D_41D5_24A9D26AAD55",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B13751_5DDE_0B94_4196_3A62A847FFED_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_70D9E05E_5E6A_058C_41AE_412CA468F594",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_7C630921_5E56_07B7_41B7_A992F4857CDB",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_771AEF09_5E6A_1B77_41CA_268A24F7D11E",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_2_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_7410C37F_5E6E_0B8B_41A3_1FAE2807556F",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_3_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_7410937F_5E6E_0B8B_41C2_1658C19D9FDD",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_4_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_762872E2_5E7A_0AB5_41CD_12841AE7C700",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_6_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_48672307_60FF_7597_41CC_DC146A6DCF50",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4683EF58_5DDE_1B94_41B4_A73AC76940DC_0_HS_7_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_48675307_60FF_7597_41D3_EFFD86941436",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_66648D70_5E2F_FF94_41D3_BE1611053F28",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0_HS_1_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_48511315_60FF_758B_41D5_0086FFE2DC06",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_469E51C9_5DDE_06F7_41CA_1D66FB00D7F3_0_HS_4_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_484EF315_60FF_758B_41D5_10B1A19BA142",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B100DB_5DDE_068B_41CE_BF47D906A3C2_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_70D6005E_5E6A_058C_41D4_75F3D5D84172",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_762B32F2_5E7A_0A94_41A5_FD745B45E112",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B0A36A_5DDE_0BB4_41D1_4BC7A8F63CA3_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_762B42F2_5E7A_0A94_41B2_E79024368A16",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6C983005_5E5E_057F_41B4_2A8F9A414A0A",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4692F2DA_5DDE_0A94_41C8_8840E156FE12_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6C989005_5E5E_057F_41C3_9AF8BC10B395",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_737AAC7E_5E7E_7D8C_41A8_DD19FBC6741D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_737A9C7E_5E7E_7D8C_41D5_C026B3BBB2A8",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B1721B_5DDE_0594_41D6_C9CB23AF11F5_0_HS_2_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_70D4605E_5E6A_058C_41B6_577C3919FFC9",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_6DA06AC3_5E56_7AF4_41AE_A326951AD541",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0_HS_2_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6667DD70_5E2F_FF94_417C_7E5759FC00C6",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46944A79_5DDE_0594_41D5_0107C704739C_0_HS_3_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6D1319CA_5E2A_06F5_41C5_AB6EBEB08F78",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B10EA2_5DDE_FAB4_41D7_0AD07186D214_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6C9F7005_5E5E_057F_41CC_BFA847B402F7",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_66A2ADDC_5E36_3E8D_41D6_571493BFD224",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_66A10DDC_5E36_3E8D_41BF_D47A70299B60",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_658C87E0_5E3A_0AB5_41C5_5645812CD5E0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B1DD04_5DDE_1F7D_41C8_4DD6BE3EDFD4_0_HS_4_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_658CD7E0_5E3A_0AB5_41D3_2E7B4F761227",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_667EDFE4_5E2A_1ABC_41D3_382CA0461998",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_762C12F2_5E7A_0A94_4191_0666DF9D66E2",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_468B1F51_5DDF_FB94_41B2_6D7AA500DA0B_0_HS_2_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_762C42F2_5E7A_0A94_41B3_6855823160F4",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_66674D70_5E2F_FF94_41CE_6E13CB250689",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B1E69E_5DDE_0A8C_41CD_6711B43BC99C_0_HS_3_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6D1DB9CA_5E2A_06F5_41B1_B69F3BBC8CEA",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_70D4D05E_5E6A_058C_41C8_DD0C9838B680",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_70D7B05E_5E6A_058C_41D0_FA30B640775A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B1B9E8_5DDE_06B5_41CD_3EFF4D412D04_0_HS_5_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_72FFFFD7_5E6D_FA9B_41C0_2A9A7A92C9B9",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_762E92F2_5E7A_0A94_417A_DF4CF96FC4DA",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_762ED2F2_5E7A_0A94_41B9_28BEBC12BEB8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_469CF672_5DDE_0D95_41D7_421452AA0901_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_6DA67AB3_5E56_7A9B_41C8_24832F8DB110",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_762992E2_5E7A_0AB5_419F_5D5453D5DF0C",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_7629C2E2_5E7A_0AB5_41D2_6984A31A816B",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_2_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_762962F2_5E7A_0A94_41D4_5AD8B737CD18",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_3_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_762AA2F2_5E7A_0A94_41A6_DC877F210D10",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_4_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_762AC2F2_5E7A_0A94_41D6_5844652014A9",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_48653309_60FF_759B_41AA_38C6176C73AB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_8_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_48629309_60FF_759B_41AD_73C2F17F0A1B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_46B0CB00_5DDE_3B75_41B1_F4AB60C4B088_0_HS_9_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_4862E309_60FF_759B_41B8_ED004BC18B75",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_66A18DDC_5E36_3E8D_4192_4F95C2604488",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4693A8A0_5DDE_06B4_41CD_4753E022DB65_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_66A1EDDC_5E36_3E8D_41D4_5ED180B49A8A",
 "rowCount": 6,
 "colCount": 5
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 80,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "maxHeight": 80,
 "backgroundOpacity": 0,
 "width": 50,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 600,
 "maxWidth": 600,
 "id": "Image_7612E3D2_6003_3489_41D5_0AC2AFA18746",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_7612E3D2_6003_3489_41D5_0AC2AFA18746.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "28.982%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11919"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": "26.316%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareTwitter(window.location.href)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook(window.location.href)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_74C7766F_600C_FF96_41CA_66C9AB5B249B"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "itemLabelPosition": "bottom",
 "itemVerticalAlign": "top",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "itemOpacity": 1,
 "height": "92%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "minWidth": 1,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorRatios": [],
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "itemPaddingTop": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "shadow": false,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingRight": 70,
 "itemLabelGap": 7,
 "borderRadius": 5,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "itemHorizontalAlign": "center",
 "gap": 26,
 "class": "ThumbnailGrid",
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxHeight": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "itemWidth": 220,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemMaxWidth": 1000
},
{
 "horizontalAlign": "center",
 "maxHeight": 948,
 "maxWidth": 1264,
 "id": "Image_68C0E19E_5EFA_068C_41CC_D99DD05275DA",
 "backgroundOpacity": 0,
 "width": "108.872%",
 "borderRadius": 0,
 "url": "skin/Image_68C0E19E_5EFA_068C_41CC_D99DD05275DA.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image80150"
 },
 "shadow": false
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "https://www.google.com/maps?output=embed&center=16.7974999,74.145095&z=17&q=RajGad+Family+Homestay,+Panhala",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "class": "WebFrame",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "99.975%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "class": "ViewerArea",
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "show": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_480FB1DD_600D_14BA_41BA_AB25151AD971.set('selectedIndex', -1); }, this); this.playList_480FB1DD_600D_14BA_41BA_AB25151AD971.set('selectedIndex', 0)"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
  "this.Image_76EDBE83_601C_EC8E_41BC_415D2338DEA2"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "55%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "45%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.playGlobalAudio(this.audio_4391F58A_5DD6_0F75_41D3_7A6D55E92E3A)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Tour Information",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Tour Info"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Panorama List",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Panorama List"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Location",
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Location",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Location"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Floorplan",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Floorplan"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Photoalbum",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Photoalbum"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Contact Information",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Contact"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 78,
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>360 Giantwheel Studio</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.giantwheelstudio.com/360</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>giantwhelllc@gmail.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Ph: +91 9657 88 9484</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "backgroundOpacity": 0,
 "width": 42,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 42,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 948,
 "maxWidth": 1264,
 "id": "Image_74C7766F_600C_FF96_41CA_66C9AB5B249B",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_74C7766F_600C_FF96_41CA_66C9AB5B249B.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11728"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "height": 50,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 300,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 30,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "5.17%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": true,
 "top": "2.73%",
 "height": "8.197%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_76EDBE83_601C_EC8E_41BC_415D2338DEA2",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_76EDBE83_601C_EC8E_41BC_415D2338DEA2.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image10534"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "5%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>RAJGAD FAMILY</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>HOMESTAY</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.4vh;font-family:'Oswald';\"><B>Panhala, Kolhapur.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;font-family:'Aileron';\">RajGad Family Homestay located 15 KMS away from Kolhapur and 7 kms Near Panhala Fort ....</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;font-family:'Aileron';\">RajGad HomeStay provides sufficient space to stay and relax with Serene and Fresh atmosphere.... adding valley and hill view points, it is Partly Isolated Location and Surrounded with Agricultural Atmosphere.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.62vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "width": 180,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 50,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "2.39vh",
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "LOREM IPSUM",
 "fontStyle": "italic",
 "borderSize": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button31015"
 },
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "46%",
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>RAJGAD FAMILY</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>HOMESTAY</I></B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_75738F3D_6003_EDFA_41C9_3C142912DB76",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "75%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 1366,
 "maxWidth": 878,
 "id": "Image_75738F3D_6003_EDFA_41C9_3C142912DB76",
 "backgroundOpacity": 0,
 "width": "22.864%",
 "borderRadius": 0,
 "url": "skin/Image_75738F3D_6003_EDFA_41C9_3C142912DB76.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "39.444%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11101"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.4vh;font-family:'Oswald';\"><B><I>VEDHIKHA SHINDE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><I>Owner</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Contact: +91 93562 93029, 88064 43030</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>rajgadhomestay@gmail.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.98vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "existsKey": function(key){  return key in window; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
