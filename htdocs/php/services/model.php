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
    'getModels' => array(
      'type' => array(RestGeneric::METHOD_GET, RestGeneric::METHOD_POST),
      'description' => '',
      'params' => array(
        'action' => array(
          'required' => false,
          'type' => RestGeneric::PARAM_TYPE_STRING,
          'description' => '',
          'exampleValue' => ''
        )
      ),
      'returnExample' => array('type' => RestGeneric::RETURN_EXAMPLE_DYNAMIC)
    ),
    'updateModel' => array(
      'type' => array(RestGeneric::METHOD_GET, RestGeneric::METHOD_POST),
      'description' => '',
      'params' => array(
        'action' => array(
          'required' => ture,
          'type' => RestGeneric::PARAM_TYPE_STRING,
          'description' => '',
          'exampleValue' => '{ "id_model" : "1",
                               "model_name":"Musee",
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
      $action = json_decode($request['action']);
      if ($action == null) { return serviceHelper::returnMessage("missing");}
      $model_name = $action->model_name;
      $model_description = $action->model_description;
      $model_image = $action->model_image;
      $sql = "INSERT INTO model (model_name,model_description,model_image) VALUES ('{$model_name}','{$model_description}','{$model_image}');";
      if (!serviceHelper::isExistIn("id_model","model",array(array("key"=>"model_name","value"=>$model_name)))) {
        serviceHelper::query($sql);
        return serviceHelper::returnMessage("success");
      }else{
        return serviceHelper::returnMessage("existing");
      }
    }else{
      return serviceHelper::returnMessage("missing");
    }
  }

  function getModels($request){
    $models = serviceHelper::query("SELECT * FROM model");
    return $models;
  }

  function updateModel($request){
    if (serviceHelper::isValidRequest($request['action'])) {
      $action = json_decode($request['action']);
      if ($action == null) { return serviceHelper::returnMessage("missing");}
      $id_model = $action->id_model;
      $model_name = $action->model_name;
      $model_description = $action->model_description;
      $model_image = $action->model_image;
      $sql = "UPDATE model SET model_name = '{$model_name}' , model_description = '{$model_description}' , model_image = '{$model_image}' WHERE id_model = {$id_model};";
      echo $sql;
      if ($result = serviceHelper::isExistIn("id_model","model",array(array("key"=>"id_model","value"=>$id_model)))) {
        serviceHelper::query($sql);
        return serviceHelper::returnMessage("success");
      }else{
        return serviceHelper::returnMessage("inexisting");
      }
    }else{
      return serviceHelper::returnMessage("missing");
    }
  }

}