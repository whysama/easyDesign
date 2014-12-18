<?php

class User extends RestGeneric{
  public static $methods = array(
    'createUser' => array(
      'type' => array(RestGeneric::METHOD_GET, RestGeneric::METHOD_POST),
      'description' => '',
      'params' => array(
        'login'=> array('required' => true, 'type' => RestGeneric::PARAM_TYPE_STRING, 'description' => '', 'exampleValue' => 'airweb'),
        'password' => array('required' => true, 'type' => RestGeneric::PARAM_TYPE_STRING, 'description' => '', 'exampleValue'=> 'aze789'),
        'user_type'=>array('required' => true, 'type' => RestGeneric::PARAM_TYPE_INT, 'description' => 'userType(1:airweb,2:client)', 'exampleValue'=> '1'),
      ),
      'returnExample' => array(
        'type' => RestGeneric::RETURN_EXAMPLE_STATIC,
        'value' => '{"status":"ok","time":1356012312,"exectime":0.181,"response":{}}',
      )
    ),
    'deleteUser' => array(
      'type' => array(RestGeneric::METHOD_GET, RestGeneric::METHOD_POST),
      'description' => '',
      'params' => array(
        'login'=> array('required' => true, 'type' => RestGeneric::PARAM_TYPE_STRING, 'description' => '', 'exampleValue' => 'airweb'),
      ),
      'returnExample' => array(
        'type' => RestGeneric::RETURN_EXAMPLE_STATIC,
        'value' => '{"status":"ok","time":1356012312,"exectime":0.181,"response":{}}',
      )
    ),
  );

  function createUser($request){
    $login = $request['login'];
    $password = hashPassword($request['password']);
    $user_type = $request['user_type'];
    $sql = "INSERT INTO user (login, password, user_type) VALUES ('{$login}','{$password}','{$user_type}');";
    if (!serviceHelper::isExistIn('id_user','user',array(array('key'=>'login','value'=>$login)))) {
      serviceHelper::query($sql);
      return serviceHelper::returnMessage("success");
    }else{
      return serviceHelper::returnMessage("existing");
    }
  }

  function deleteUser($request){
    $login = $request['login'];
    $sql = "DELETE FROM user WHERE login = '{$login}';";
    if ($result = serviceHelper::isExistIn('id_user','user',array(array('key'=>'login','value'=>$login)))) {
      serviceHelper::query($sql);
      return serviceHelper::returnMessage("success");
    }else{
      return serviceHelper::returnMessage("inexisting");
    }
  }
}
