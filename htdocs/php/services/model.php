<?php

class Model extends RestGeneric{
  public static $methods = array(
    'createModel' => array(
      'type' => array(RestGeneric::METHOD_GET, RestGeneric::METHOD_POST),
      'description' => '',
      'params' => array(
        'action' => array(
          'required' => ture,
          'type' => RestGeneric::PARAM_TYPE_STRING,
          'description' => '',
          'exampleValue' => '{ "model_name":"Musee",
                               "model_description":"A model designed for our museum application",
                               "model_image" : ""
                             }'
        )
      ),
      'returnExample' => array('type' => RestGeneric::RETURN_EXAMPLE_DYNAMIC)
    ),
  );

  function createModel($request){
    if (serviceHelper::isValidRequest($request['action'])) {
      
    }else{
      return serviceHelper::returnFalseMessage("missing");
    }
  }
}