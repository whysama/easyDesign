<?php

class serviceHelper{
  private static $messages = array(
      'success'  => array("code" => "111", "message" => "success"),
      'missing'  => array('code' => '000', 'message' => 'Missing params'),
      'existing' => array('code' => '001', 'message' => 'Param is already exist in database'),
      
    );

  public static function isValidRequest($request){
    if (!isset($request) || $request == null) {
      return false;
    }else{
      return true;
    }
  }

  public static function returnMessage($keyword,$var){
    return self::$messages[$keyword];
  }

  public static function notExistIn($value,$attr,$table){
    global $db;

    $sql = "SELECT {$attr} FROM {$table} WHERE {$attr} = '{$value}';";
    $result = self::query($sql);

    if (count($result) > 0) {
      return false;
    }else{
      return true;
    }
  }

  public static function query($sql){
    global $db;
    $result = $db->query($sql,false,true);
    return $result;
  }
}